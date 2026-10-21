"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const SKIP_SECONDS = 10;

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "00:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function SkipButton({ direction, onClick }: { direction: "back" | "forward"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "back" ? "Lùi 10 giây" : "Tới 10 giây"}
      className="relative flex size-10 items-center justify-center"
    >
      <Image src={direction === "back" ? "/figma/audio-back10.svg" : "/figma/audio-fwd10.svg"} alt="" width={32} height={32} />
    </button>
  );
}

/**
 * Figma "Audio guide" (450:66362 / 720:27082): 345x144 card on #E5DBC6 at 70%, waveform icon,
 * draggable progress (#AA6E00 on white, #DDB86B knob), times, -10s / play / +10s controls.
 */
export function AudioGuide({ src }: { src?: string }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [playing, setPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const dragging = useRef(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => !dragging.current && setCurrent(audio.currentTime);
    const onMeta = () => setDuration(audio.duration);
    const onEnd = () => setPlaying(false);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("loadedmetadata", onMeta);
    audio.addEventListener("durationchange", onMeta);
    audio.addEventListener("ended", onEnd);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("loadedmetadata", onMeta);
      audio.removeEventListener("durationchange", onMeta);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio || !src) return;
    if (audio.paused) {
      try {
        await audio.play();
        setPlaying(true);
      } catch {
        setPlaying(false);
      }
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const seekTo = (time: number) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const next = Math.min(Math.max(time, 0), duration);
    audio.currentTime = next;
    setCurrent(next);
  };

  const seekFromPointer = (clientX: number) => {
    const rect = trackRef.current?.getBoundingClientRect();
    if (!rect || !duration) return;
    seekTo(((clientX - rect.left) / rect.width) * duration);
  };

  const progress = duration ? Math.min(current / duration, 1) : 0;

  return (
    <div className="relative h-36 w-full rounded-lg bg-[#E5DBC6]/70 px-7">
      {src && <audio ref={audioRef} src={src} preload="metadata" />}

      {/* Client's 34-frame "beat" PNG sequence as an animated WebP; the first frame stands still while paused. */}
      <Image
        src={playing ? "/figma/audio-wave.webp" : "/figma/audio-wave-still.png"}
        alt=""
        width={63}
        height={24}
        unoptimized
        className="absolute top-2.5 left-1/2 -translate-x-1/2"
      />

      <div
        ref={trackRef}
        role="slider"
        aria-label="Tiến độ audio"
        aria-valuemin={0}
        aria-valuemax={Math.round(duration)}
        aria-valuenow={Math.round(current)}
        className="absolute top-[34px] right-7 left-7 h-10 cursor-pointer touch-none"
        onPointerDown={(e) => {
          dragging.current = true;
          e.currentTarget.setPointerCapture(e.pointerId);
          seekFromPointer(e.clientX);
        }}
        onPointerMove={(e) => dragging.current && seekFromPointer(e.clientX)}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
      >
        <div className="absolute inset-x-0 top-[19px] h-1 rounded-sm bg-white" />
        <div className="absolute top-[19px] left-0 h-1 rounded-sm bg-[#AA6E00]" style={{ width: `${progress * 100}%` }} />
        <div
          className="absolute top-3 size-4 -translate-x-1/2 rounded-full bg-[#DDB86B]"
          style={{ left: `${progress * 100}%` }}
        />
      </div>

      <div className="absolute top-[65px] right-7 left-7 flex justify-between text-xs leading-[15px] text-[#19264E]/80">
        <span>{formatTime(current)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="absolute top-[86px] left-1/2 flex -translate-x-1/2 items-center gap-6">
        <SkipButton direction="back" onClick={() => seekTo(current - SKIP_SECONDS)} />
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? "Tạm dừng" : "Phát audio"}
          className="flex size-12 items-center justify-center rounded-full bg-[#727273]"
        >
          {playing ? (
            <span className="flex gap-1.5">
              <span className="h-[18px] w-[5px] rounded-sm bg-[#F3EBD9]" />
              <span className="h-[18px] w-[5px] rounded-sm bg-[#F3EBD9]" />
            </span>
          ) : (
            <Image src="/figma/audio-play.svg" alt="" width={48} height={48} />
          )}
        </button>
        <SkipButton direction="forward" onClick={() => seekTo(current + SKIP_SECONDS)} />
      </div>
    </div>
  );
}

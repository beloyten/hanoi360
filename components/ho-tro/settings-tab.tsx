"use client";

import { useState } from "react";
import { CheckIcon } from "../home/icons";
import { useGeoPermission } from "../home/use-geo-permission";
import { Switch } from "@/components/ui/switch";

const LANGUAGES = [
  { key: "vi", label: "Vietnamese", enabled: true },
  { key: "en", label: "English", enabled: true },
  { key: "zh", label: "Chinese", enabled: false },
] as const;

function LocationToggle() {
  const { status, requestLocation } = useGeoPermission();
  const [override, setOverride] = useState<boolean | null>(null);
  // A denied permission always shows as off, whatever the user toggled before.
  const enabled = status === "denied" ? false : (override ?? status === "granted");

  const handleChange = (checked: boolean) => {
    setOverride(checked);
    if (checked && status !== "granted") requestLocation();
  };

  return (
    <div className="flex items-center justify-between gap-4 bg-white px-4 py-4">
      <div className="min-w-0">
        <p className="text-sm font-medium text-[#252525]">Cho phép truy cập vị trí của bạn</p>
        <p className="mt-0.5 text-xs text-[#58585c]">Dùng để gợi ý các địa điểm gần bạn nhất</p>
      </div>

      <Switch
        size="lg"
        checked={enabled}
        onCheckedChange={handleChange}
        aria-label="Cho phép truy cập vị trí của bạn"
        className="data-checked:bg-[#aa6e00]"
      />
    </div>
  );
}

export function SettingsTab() {
  const [language, setLanguage] = useState<(typeof LANGUAGES)[number]["key"]>("vi");

  return (
    <div className="flex flex-col">
      <LocationToggle />

      <div className="mt-1 flex flex-col bg-white">
        {LANGUAGES.map((lang) => {
          const isActive = language === lang.key;
          return (
            <button
              key={lang.key}
              type="button"
              disabled={!lang.enabled}
              onClick={() => setLanguage(lang.key)}
              className="flex items-center justify-between gap-2 border-b border-[#ececec] px-4 py-3.5 text-left last:border-b-0 disabled:opacity-40"
            >
              <span className="text-sm" style={{ color: isActive ? "#aa6e00" : "#252525", fontWeight: isActive ? 600 : 400 }}>
                {lang.label}
              </span>
              {isActive && <CheckIcon className="h-4 w-4 text-[#aa6e00]" />}
            </button>
          );
        })}
      </div>
    </div>
  );
}

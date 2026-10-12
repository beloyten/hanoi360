"use client";

import { useSyncExternalStore } from "react";

type GeoPermissionState = "unknown" | "prompt" | "granted" | "denied" | "unsupported";

// One permission status shared by every component (cards read it to hide distances when denied).
let status: GeoPermissionState = "unknown";
let started = false;
const listeners = new Set<() => void>();

function setStatus(next: GeoPermissionState) {
  if (next === status) return;
  status = next;
  listeners.forEach((listener) => listener());
}

function start() {
  if (started) return;
  started = true;
  if (!navigator.geolocation) {
    setStatus("unsupported");
    return;
  }
  if (!navigator.permissions?.query) {
    setStatus("prompt");
    return;
  }
  navigator.permissions
    .query({ name: "geolocation" as PermissionName })
    .then((result) => {
      setStatus(result.state as GeoPermissionState);
      result.onchange = () => setStatus(result.state as GeoPermissionState);
    })
    .catch(() => setStatus("prompt"));
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  start();
  return () => listeners.delete(listener);
}

export function useGeoPermission() {
  const current = useSyncExternalStore(
    subscribe,
    () => status,
    () => "unknown" as GeoPermissionState,
  );

  const requestLocation = () => {
    if (typeof navigator === "undefined" || !navigator.geolocation) {
      setStatus("unsupported");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      () => setStatus("granted"),
      () => setStatus("denied"),
    );
  };

  return { status: current, requestLocation };
}

/** Distances are meaningless without the user's position (client comment 05/09): hide them when denied. */
export function useShowDistance() {
  return useGeoPermission().status !== "denied";
}

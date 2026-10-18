"use client";

import { useState } from "react";
import { InfoIcon, PhoneIcon, SettingsIcon } from "../home/icons";
import { BottomNav } from "../home/bottom-nav";
import { TopBar } from "../shared/top-bar";
import { EmergencyTab } from "./emergency-tab";
import { LegalTab } from "./legal-tab";
import { SettingsTab } from "./settings-tab";

const TABS = [
  { key: "settings", label: "Cài đặt", Icon: SettingsIcon },
  { key: "emergency", label: "Khẩn cấp", Icon: PhoneIcon },
  { key: "legal", label: "Pháp lý", Icon: InfoIcon },
] as const;

const ACTIVE_COLOR = "#AA6E00";
const INACTIVE_COLOR = "#19264E";

export function HoTroScreen() {
  const [tab, setTab] = useState<(typeof TABS)[number]["key"]>("settings");

  return (
    <div
      className="relative h-dvh w-full overflow-hidden"
      style={{ background: "linear-gradient(180deg, #FFFFFF 0%, #E3E2E0 100%)" }}
    >
      <main
        className="h-full overflow-y-auto"
        style={{ paddingBottom: "calc(83px + env(safe-area-inset-bottom))" }}
      >
        <div className="sticky top-0 z-20 bg-white">
          {/* Figma "Top bar / Lưu" instance in Layout 10_Them: 52px, centered #27314D title. */}
          <TopBar title="Hỗ trợ" align="center" showBack={false} color="#27314D" height={64} />

          {/* Figma Layout 10_Them: 3 x 116px tabs at y 96, 21px side margins, content from y 181. */}
          <div className="px-[21px] pb-[21px]">
            <div className="flex items-center justify-center">
              {TABS.map(({ key, label, Icon }) => {
                const isActive = tab === key;
                const color = isActive ? ACTIVE_COLOR : INACTIVE_COLOR;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setTab(key)}
                    className={`flex flex-1 p-0.5 transition-colors ${isActive ? "bg-[#9B9B9B]" : "bg-transparent"}`}
                  >
                    <span className="flex flex-1 flex-col items-center gap-1.5 rounded bg-white px-2 py-3">
                      <span style={{ color }}>
                        <Icon className="h-6 w-6" filled={isActive} />
                      </span>
                      <span className="text-xs font-medium" style={{ color }}>
                        {label}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-[21px]">
          {tab === "settings" && <SettingsTab />}
          {tab === "emergency" && <EmergencyTab />}
          {tab === "legal" && <LegalTab />}
        </div>
      </main>

      <BottomNav />
    </div>
  );
}

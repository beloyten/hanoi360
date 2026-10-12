"use client";

import { useState } from "react";

function CaretIcon({ className }: { className?: string }) {
  return (
    <svg width="12" height="5" viewBox="0 0 12 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <path d="M0 5L6 0L12 5H0Z" fill="currentColor" />
    </svg>
  );
}

const SECTIONS = [
  {
    key: "intro",
    title: "Giới thiệu",
    content:
      "Hanoi 360 là ứng dụng du lịch thông minh giúp bạn khám phá Hà Nội theo cách trực quan và chân thực nhất. Ứng dụng cung cấp thông tin về ẩm thực, vui chơi giải trí, di tích lịch sử, làng nghề truyền thống và nhiều địa điểm hấp dẫn khác trên khắp thành phố. Với hình ảnh sống động cùng gợi ý theo vị trí thực tế, Hanoi 360 giúp bạn dễ dàng lên kế hoạch cho chuyến đi ngay trên thiết bị di động.",
  },
  {
    key: "terms",
    title: "Điều khoản sử dụng",
    content:
      "Khi sử dụng Hanoi 360, bạn đồng ý tuân thủ các điều khoản sử dụng của ứng dụng, bao gồm việc cung cấp thông tin chính xác, không sử dụng ứng dụng cho mục đích trái pháp luật và tôn trọng quyền sở hữu trí tuệ đối với nội dung được cung cấp trong ứng dụng.",
  },
  {
    key: "privacy",
    title: "Chính sách bảo mật",
    content:
      "Hanoi 360 cam kết bảo mật thông tin cá nhân của bạn. Dữ liệu vị trí và thông tin sử dụng chỉ được dùng để cải thiện trải nghiệm gợi ý địa điểm, không được chia sẻ cho bên thứ ba nếu không có sự đồng ý của bạn.",
  },
];

export function LegalTab() {
  const [openKey, setOpenKey] = useState<string | null>("intro");

  return (
    <div className="flex flex-col gap-1 py-4">
      {SECTIONS.map((section) => {
        const isOpen = openKey === section.key;
        return (
          <div key={section.key} className="bg-white px-3">
            <button
              type="button"
              onClick={() => setOpenKey((prev) => (prev === section.key ? null : section.key))}
              className="flex w-full items-center justify-between gap-2 py-3.5 text-left"
            >
              <span className={`text-sm font-medium ${isOpen ? "text-[#AA6E00]" : "text-[#252525]"}`}>{section.title}</span>
              <span
                className={`shrink-0 transition-transform ${isOpen ? "text-[#aa6e00]" : "text-[#27314d]"}`}
                style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
              >
                <CaretIcon />
              </span>
            </button>

            {isOpen && <p className="pb-4 text-sm leading-relaxed text-[#58585c]">{section.content}</p>}
          </div>
        );
      })}
    </div>
  );
}

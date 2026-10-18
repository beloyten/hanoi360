/** 360° tours opened full screen from detail pages ("Xem 360°"). The client supplies one tour for now. */
export const VR_TOURS: Record<string, { title: string; url: string; back: string }> = {
  "hoang-thanh": {
    title: "Hoàng Thành Thăng Long",
    url: "https://tour.panoee.net/hoangthanhthanglong",
    back: "/di-tich/9",
  },
  "bao-tang-quan-su": {
    title: "Bảo tàng Lịch sử Quân sự Việt Nam",
    url: "https://tour.panoee.net/hoangthanhthanglong",
    back: "/bao-tang/5",
  },
};

/** Audio guide shared by Hoàng Thành and Bảo tàng Quân sự (client's 7 Hoàng Thành parts merged in order). */
export const AUDIO_GUIDE_SRC = "/audio/audio-guide.mp3";

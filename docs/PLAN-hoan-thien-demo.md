PLAN HOÀN THIỆN DEMO HANOI 360
Lập ngày 07/10/2026. Trạng thái: chờ khách chốt gói, chưa triển khai.

CONTEXT & GOAL
Hoàn thiện webapp demo Hanoi 360 (Next.js 16.3.5, React 19, Tailwind 4, zustand) cho khớp Figma, chạy mượt trên Safari iOS 16+ và Chrome Android, khung 393px (dải hỗ trợ 360 - 430px). Bảo vệ ngày 27/10/2026, bản chốt 22/10/2026.
Repo do dev cũ init (origin: github.com/boodev03/hanoi360), deploy Vercel (vercel.json có sẵn, chưa rõ ai sở hữu project).

Figma: file key u4lKDcBxgxMlp74eUw9Gaq
1. Node Feedback 708-54311 (screenshot hiện trạng + frame đúng + mục "Chưa làm")
2. Node UI 708-54312 (toàn bộ thiết kế, khoảng 70 frame)
Cả 2 node đã fetch và lưu ở .figma-cache/ (gitignored): feedback-708-54311.yaml, ui-708-54312.yaml. Đọc bằng grep, KHÔNG gọi lại get_figma_data cho 2 node này. Chỉ còn cần download_figma_images, gom batch 2-3 lần gọi.

Node quan trọng
1. Top bar component set: 429:38288 (variant home 392:11222, category 429:38289, chi tiết 556:51864, Filter 429:38573, Lưu 429:38453)
2. Filter component sets: Giải trí 719:23980, Bảo tàng 719:24529, Vui chơi 719:24721, Làng nghề 719:24804, Mua sắm 719:25035, Y tế 719:25105; button_filter 429:42930; btn_category 466:59829
3. Home: UI 500:75747, Layout 2_home 567:93939 và 720:26497 (bản mới), feedback 653:84108 / 686:89996
4. Welcome: UI 369:7574 (+ frame 1-4: 698:70739, 698:70831, 698:70770, 698:70798), feedback 696:64369
5. Trang Lịch sử HN: UI "lich su hn" 696:63294, chi tiết 696:63163 và 720:26467; component "card thông tin" 696:64422
6. Chi tiết bảo tàng có Audio guide + nút "Xem 360o": 720:27067; màn 360: 720:27147 (UI: 413:36831, di tích 360: 413:36476)
7. Tìm kiếm theo dạng bản đồ: UI 720:28903, 720:28993; feedback 720:29181, 720:29271; Map 720:29458
8. Giải trí (nội dung riêng, nhà hát/rạp): section 417:40044
9. Hỗ trợ ("Thêm"): section 423:40475; Cẩm nang: section 423:39469

HIỆN TRẠNG CODE (review 07/10)
1. Build + tsc pass. eslint: 1 lỗi (components/ho-tro/settings-tab.tsx:20, setState trong effect), 2 warning <img>.
2. 7 module danh mục copy nhau (header, hero, filter-bar, filter-sheet, use-filter-store, category-filter), mỗi file chỉ khác 4-14 dòng.
3. Filter sheet không lọc gì (store chỉ dùng để tô màu nút). Chip <500m / <1000m chỉ đổi màu.
4. Key guide:* và exhibit:* không được resolveSavedItem xử lý (components/da-luu/saved-items.ts) nên không hiện ở Đã lưu.
5. Mọi di tích dùng chung 1 tour VR (components/di-tich/site-content.ts:4, :112).
6. Giải trí dùng lại VENUES của vui-choi. Ảnh giải trí đã có nhưng chưa dùng: public/vui-choi/{nha-hat-tuoi-tre,cinema,hat-cheo,hat-tuong,hat-mua-roi,nha-hat-kich,lotte-cinema,cgv-xuan-dieu,...}.png
7. "Mua Vé" van-gogh href "#" + target _blank. Tên sai "Timless".
8. router.back() không có fallback khi mở thẳng link.
9. Không có viewportFit "cover" nên env(safe-area-inset-*) = 0 trên iPhone.
10. public/ 65MB, nhiều ảnh 2-10MB; khoảng 27 file không được tham chiếu.
11. Nhiều em-dash / en-dash trong nội dung UI (restaurants.ts, *-content.ts, app/trien-lam/*) cần đổi sang "-".
12. Không có Hoàng Thành Thăng Long trong dữ liệu (Figma đặt ở "Chi tiet/bao tang").

OUT OF SCOPE
Backend, định vị thật, tìm kiếm thật, đa ngôn ngữ, giao diện desktop/tablet, sản xuất nội dung (ảnh, audio, 360). Không xoá các component shadcn thừa trong components/ui. Không refactor ngoài phạm vi các phase dưới.

PHASE 0 - CHUẨN BỊ (khoảng 0,5 ngày)
1. Xác nhận quyền push repo và Vercel. Không có thì tạo project Vercel mới từ repo của khách.
2. Tải asset Figma theo batch: icon danh mục (SVG), illustration hero, banner, ảnh trang Lịch sử HN, ảnh Welcome (hoặc lấy bản gốc từ link Google Drive trong frame Feedback).
3. Chụp hiện trạng các màn ở 393x852 (Chrome device mode) làm mốc so sánh.
VERIFY: npm run build pass.

PHASE 1 - GOM CODE DÙNG CHUNG (khoảng 0,5 ngày, làm trước mọi bug)
1. Gom 6 file trùng của 7 danh mục vào components/shared/category/, mỗi danh mục còn 1 file config (title, màu gradient, illustration, filters, data, hrefPrefix, savedKey prefix).
2. Component TopBar theo các variant Figma (home, category, chi tiết, filter, lưu). Thay header ở DetailScreen, Hỗ trợ, các danh mục.
3. app/layout.tsx: export viewport với viewportFit: "cover".
VERIFY: build + eslint pass; 8 danh mục render như trước khi gom.

PHASE 2 - SỬA BUG THEO DANH SÁCH KHÁCH (đợt 1, giao 13/10)
1. Home: icon danh mục SVG nét; banner theo Figma (card bên 196x245, khoảng cách theo frame); card Gần bạn nhất có ảnh thật + link sang detail di tích tương ứng; màu chữ banner Lịch sử HN + link sang /lich-su-ha-noi.
2. Danh mục: state selected của nút filter; nút filter bằng ảnh đúng size/spacing; chiều cao card Ẩm thực; hero dùng ảnh đúng độ phân giải; font banner theo Figma.
3. Detail: TopBar variant chi tiết; icon back đúng size.
4. Welcome: 4 ảnh chất lượng cao; font Inter theo Figma (đang dùng Baloo); spacing nút; sửa vuốt trên iOS (bỏ onPointerLeave khỏi track, dừng autoplay khi đang kéo, chặn double commit của pill).
5. Hỗ trợ: chiều cao header. Cẩm nang: padding vùng content. Bản đồ: thay ảnh bản đồ.
6. Lỗi logic lộ khi demo (khoảng 2h): sheet lọc lọc thật; Đã lưu hỗ trợ guide:* và exhibit:*; VR theo từng di tích; sửa link Mua vé; back có fallback; lỗi eslint settings-tab.
7. Đổi em-dash / en-dash trong UI copy sang "-".
VERIFY: chụp từng màn 393px đặt cạnh frame Figma; build + eslint pass.

PHASE 3 - TÍNH NĂNG MỚI (đợt 2, giao 16/10)
1. Route /lich-su-ha-noi: thanh tab 5 mốc dính đầu trang (Trước TK 10, Từ năm 1010, Từ TK 19, Từ năm 1945, Hà Nội hôm nay), bấm cuộn tới mục; InfoCard theo "card thông tin" (icon sách, đoạn văn, gallery 1-5 ảnh, CTA dẫn tới địa điểm).
2. AudioPlayer theo Figma (play/pause, thanh tua kéo được, -10s / +10s, thời gian), dùng <audio> gốc. Thêm Hoàng Thành Thăng Long vào dữ liệu bảo tàng, gắn player. Dùng file mẫu tới khi khách gửi file thật.
3. Nút "Xem 360°" + route /[danh-mục]/[id]/360 toàn màn hình theo Figma (top bar nút đóng, chữ "Kéo để tham quan"). Iframe nếu khách gửi link tour; Photo Sphere Viewer nếu khách gửi ảnh panorama.
4. Màn "Tìm kiếm theo" dạng bản đồ có bộ lọc theo frame Category_am thuc_2.
5. Dữ liệu Giải trí riêng theo Figma, dùng ảnh có sẵn trong public/vui-choi/.
VERIFY: build pass; audio và 360 chạy trên Chrome mobile emulation; test máy thật.

PHASE 4 - TỐI ƯU VÀ QA (19 - 21/10)
1. Nén ảnh public/ sang WebP, rộng tối đa 1200px; xoá file không dùng; đổi <img> còn lại sang next/image.
2. Test iPhone Safari + Android Chrome thật; gắn audio và 360 thật từ khách.
3. 2 vòng feedback, chốt bản 22/10.

ACCEPTANCE CRITERIA
1. npm run build và npx eslint . không có lỗi.
2. Mọi màn trong danh sách feedback khớp frame Figma tương ứng ở 393px (kích thước, màu, font, spacing).
3. Vuốt Welcome/banner, audio, màn 360 chạy trên iPhone Safari và Android Chrome thật.
4. public/ dưới 15MB; Home tải dưới 3 giây trên 4G.

ĐIỀU KIỆN TỪ KHÁCH
1. Quyền repo + Vercel trước 08/10.
2. Ảnh chất lượng cao, file audio, nội dung 360 (1 dạng thống nhất) trước 17/10.
3. Feedback gộp 1 danh sách mỗi đợt, phản hồi trong 1 ngày làm việc.

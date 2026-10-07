import { DetailScreen } from "@/components/shared/detail-screen";
import { getExhibit } from "@/components/trien-lam/exhibits";
import type { DetailBlock } from "@/components/shared/detail-content";

const EXHIBIT = getExhibit("dong-chay-cua-lua");

const CONTENT: DetailBlock[] = [
  {
    type: "text",
    parts: [
      {
        text: "Cũng giống như nghệ thuật nói chung, dòng chảy của tranh lụa nằm trong dòng chảy của văn hóa Việt, mà mỗi sự khai phá của những thế hệ họa sĩ vẽ lụa là một điểm ghim chốt nối dài, định hình dòng chảy.",
      },
    ],
  },
  {
    type: "text",
    parts: [
      {
        text: "Lụa là một chất liệu đặc biệt trong hội họa phương Đông. Phần lớn ngày nay các họa sĩ được đào tạo theo kỹ thuật hội họa phương Tây nên việc thử nghiệm với lụa đòi hỏi người họa sĩ phải thay đổi cách nghĩ, cách sáng tạo để hiểu và có hiệu quả với lụa. Đơn cử như việc cùng thử nghiệm một phác thảo trên sơn dầu và lụa, sẽ ra hai bức tranh có ngôn ngữ biểu đạt hoàn toàn khác. Trong đó, phác thảo cho ra một bức tranh sơn dầu thành công thì chưa chắc đã hiệu quả với lụa. Với tranh lụa đương đại, người họa sĩ không còn bị bó hẹp theo một trường phái hay nguyên tắc nào mà có thể vận dụng đến kiến thức văn hóa, nghệ thuật của Đông Tây Kim Cổ kết hợp. Tuy nhiên, với tính chất đặc trưng của vật liệu đỡ và độ trong của chất màu, lụa không thể vẽ nhanh, vẽ vội mà vẫn cần một độ chín chắn nhất định cả về tư duy lẫn kỹ thuật. Bởi vậy, vẽ lụa không khác nào một sự rèn luyện thân, tâm cho họa sĩ.",
      },
    ],
  },
  { type: "image", src: "/home/banner-4/img-1.png", alt: "Trong dòng chảy của Lụa" },
  {
    type: "text",
    parts: [
      {
        text: "Tranh lụa Việt Nam đã từng được biết đến với kỹ thuật nhuộm lụa của Nguyễn Phan Chánh cùng phong cách vẽ tượng trưng trong không gian ước lệ mà những họa sĩ thế hệ Đông Dương và sau đó đã thể hiện thành công tạo nên những điểm mốc quan trọng cho một phong cách tranh lụa Việt Nam mơ màng, nhuần nhị, sâu lắng.",
      },
    ],
  },
  {
    type: "text",
    parts: [
      {
        text: "Tranh lụa vắng bóng một thời gian dài trong dòng chảy của mỹ thuật hiện đại do sự phát triển mạnh mẽ của sơn dầu và những hạn chế trong sáng tác với chất liệu này chưa thích ứng với sự phát triển nhanh chóng của văn hóa xã hội trong những thập niên chuyển giao sau Đổi Mới. Thay đổi hay là chết. Lụa cũng đứng trước câu hỏi sống còn. 20 năm trở lại đây, tranh lụa đã hồi sinh và phát triển mạnh mẽ. Nhiều họa sĩ đương đại đã thành công và vượt thoát khỏi những cái bóng của những điểm ghim chốt lớn để tiếp tục dòng chảy. Tranh lụa được mở rộng giá trị cho dù được nhuộm hay không nhuộm, bồi và không bồi, với đủ các sắc thái màu sắc, ước lệ hay cả tả thực, trong những chủ đề cả duy mỹ lẫn phản ánh xã hội/ tâm thế đương đại… Tuy vậy, đi đôi với sự mở rộng bao giờ cũng là thử nghiệm, thách thức đòi hỏi cao hơn ở người họa sĩ để tạo ra những giá trị mới mà không đi khỏi bản chất của lụa.",
      },
    ],
  },
  { type: "image", src: "/home/banner-4/img-2.png", alt: "Trong dòng chảy của Lụa" },
  {
    type: "text",
    parts: [
      {
        text: "Trong dòng chảy của lụa đương đại, triển lãm của chúng tôi xin giới thiệu thêm những tác giả đang nghiên cứu và thực hành trên chất liệu lụa. Bằng nhiều cảm hứng, lý do và cách thức thử nghiệm khác nhau, các họa sĩ vẫn đang tiếp tục hành trình khám phá lụa trong qua góc nhìn cá nhân.",
      },
    ],
  },
  {
    type: "text",
    parts: [
      {
        text: "Các họa sĩ sẽ xuất hiện trong triển lãm “Trong dòng chảy của lụa 2025” bao gồm Nguyễn Văn Trinh, Phan Cẩm Thượng, Trần Hoàng Sơn, Nguyễn Thị Ngọc Diệp, Đỗ Thị Duyên, Lê Ngọc Hiếu Hạnh, Nguyễn Duy Anh, Nguyễn Cẩm Nhung, Nguyễn Phương Hoa, Nguyễn Thu Hương, Lưu Chí Hiếu.",
        italic: true,
      },
    ],
  },
];

export default function DongChayCuaLuaPage() {
  return (
    <DetailScreen
      item={{
        id: EXHIBIT.slug,
        name: EXHIBIT.name,
        photo: EXHIBIT.photo,
        hours: "24/09 - 03/10",
        address: EXHIBIT.address,
        content: CONTENT,
      }}
      savedKey={`exhibit:${EXHIBIT.slug}`}
      socials
    />
  );
}

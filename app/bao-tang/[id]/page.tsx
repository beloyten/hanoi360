import { notFound } from "next/navigation";
import { DetailScreen } from "@/components/shared/detail-screen";
import { getMuseum } from "@/components/bao-tang/museums";
import { getMuseumContent } from "@/components/bao-tang/museum-content";

export default async function MuseumDetailPage(props: PageProps<"/bao-tang/[id]">) {
  const { id } = await props.params;
  const museum = getMuseum(Number(id));

  if (!museum) notFound();

  return (
    <DetailScreen
      item={{
        id: museum.id,
        name: museum.title,
        photo: museum.cover ?? museum.image,
        address: museum.address,
        description: museum.address,
        distance: museum.distance,
        hours: museum.hours,
        hoursNote: museum.hoursNote,
        content: getMuseumContent(museum),
      }}
      savedKey={`museum:${museum.id}`}
      // Figma "Chi tiet/bao tang" (413:36662) shows Bảo tàng Lịch sử Quân sự with 360 + audio guide.
      vrTour={museum.id === 5 ? "bao-tang-quan-su" : undefined}
      audio={museum.id === 5 ? {} : undefined}
    />
  );
}

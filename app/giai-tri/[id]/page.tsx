import { notFound } from "next/navigation";
import { getEntertainment, getEntertainmentContent } from "@/components/giai-tri/entertainment";
import { DetailScreen } from "@/components/shared/detail-screen";

export default async function EntertainmentDetailPage(props: PageProps<"/giai-tri/[id]">) {
  const { id } = await props.params;
  const item = getEntertainment(Number(id));

  if (!item) notFound();

  return (
    <DetailScreen
      item={{
        id: item.id,
        name: item.name,
        photo: item.cover ?? item.photo,
        address: item.address,
        distance: item.distance,
        content: getEntertainmentContent(item),
      }}
      savedKey={`entertainment:${item.id}`}
    />
  );
}

import { notFound } from "next/navigation";
import { DetailScreen } from "@/components/shared/detail-screen";
import { getSite } from "@/components/di-tich/sites";
import { getSiteContent } from "@/components/di-tich/site-content";

export default async function SiteDetailPage(props: PageProps<"/di-tich/[id]">) {
  const { id } = await props.params;
  const site = getSite(Number(id));

  if (!site) notFound();

  return (
    <DetailScreen
      item={{
        ...site,
        address: site.address ?? site.subtitle,
        description: site.subtitle,
        content: getSiteContent(site),
      }}
      savedKey={`site:${site.id}`}
      vrTour={site.vrTour}
      audio={site.hasAudio ? {} : undefined}
    />
  );
}

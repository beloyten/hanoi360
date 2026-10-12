import { notFound } from "next/navigation";
import { VrScreen } from "@/components/shared/vr-screen";
import { VR_TOURS } from "@/lib/vr-tours";

export default async function Vr360Page(props: PageProps<"/xem-360/[slug]">) {
  const { slug } = await props.params;
  const tour = VR_TOURS[slug];
  if (!tour) notFound();
  return <VrScreen title={tour.title} url={tour.url} back={tour.back} />;
}

export function generateStaticParams() {
  return Object.keys(VR_TOURS).map((slug) => ({ slug }));
}

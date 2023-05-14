import { getVehicleById } from "@/lib/prisma/vehicle";
import { finalResult } from "@/lib/utils/helpers";
import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
const Letter = dynamic(() => import("./LetterPdf"), {
  ssr: false,
});

export async function generateMetadata({ params }: any) {
  const vehicle: any = await getVehicleById(parseInt(params.id));
  return { title: `${vehicle?.title} - letter` };
}

const page = async ({ params }: any) => {
  const vehicleId = parseInt(params.id);
  const vehicle: any = await getVehicleById(vehicleId);
  if (!vehicle) return notFound();
  if (vehicle?.result === null) return <h1>Vehicle has no result</h1>;
  const result = finalResult(vehicle.result);

  return <Letter data={JSON.stringify({ ...vehicle, finalResult: result })} />;
};

export default page;

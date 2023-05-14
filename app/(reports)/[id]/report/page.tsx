import dynamic from "next/dynamic";
import { arabicDate, finalResult, formatDate } from "@/lib/utils/helpers";
const Report = dynamic(() => import("./ReportPDF"), {
  ssr: false,
});

import { getVehicleById } from "@/lib/prisma/vehicle";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: any) {
  const vehicle: any = await getVehicleById(parseInt(params.id));
  return { title: vehicle?.title };
}

const page = async ({ params }: any) => {
  const vehicleId = parseInt(params.id);
  const vehicle: any = await getVehicleById(vehicleId);
  if (!vehicle) return notFound();
  if (vehicle?.result === null) return <h1>Vehicle has no result</h1>;
  const result = finalResult(vehicle.result);

  return (
    <Report
      data={JSON.stringify({
        ...vehicle,
        date: formatDate(vehicle.createdAt),
        arabicDate: arabicDate(vehicle.createdAt),
        finalResult: result,
      })}
    />
  );
};

export default page;

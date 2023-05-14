import { getVehicleById } from "@/lib/prisma/vehicle";
import AddResultForm from "../../../../components/addResultForm";
import UpdateResultForm from "../../../../components/updateResultForm";
import { notFound } from "next/navigation";

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const vehicleId = parseInt(params.id);
  const vehicle: any = await getVehicleById(vehicleId);

  if (!vehicle) return notFound();

  const vehicleHasResult = vehicle?.result !== null;

  return vehicleHasResult ? (
    <UpdateResultForm vehicleResult={JSON.stringify(vehicle.result)} />
  ) : (
    <AddResultForm vehicleId={vehicle?.id} />
  );
};

export default page;

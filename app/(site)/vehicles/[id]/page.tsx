import { getVehicleById } from "@/lib/prisma/vehicle";
import { Vehicle } from "@/types";
import UpdateVehicleForm from "../../../components/updateVehicleForm";

const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const vehicle = await getVehicleById(parseInt(params.id));
  return (
    <div>
      <VehicleInfoSection vehicle={vehicle} />
    </div>
  );
};

export default page;

const VehicleInfoSection = ({ vehicle }: any) => {
  const deserializedVehicle = JSON.stringify(vehicle);

  return (
    <div>
      <h1 className="mt-8 text-2xl font-bold underline uppercase underline-offset-4">
        Vehicle Information - {vehicle.title}
      </h1>
      <UpdateVehicleForm vehicle={deserializedVehicle} />
    </div>
  );
};

"use client";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

const UpdateVehicleForm = ({ vehicle }: any) => {
  const deserializedVehicle = JSON.parse(vehicle);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: deserializedVehicle.title || "",
      type: deserializedVehicle.type || "",
      palette: deserializedVehicle.palette || "",
      modelYear: deserializedVehicle.modelYear || "",
      oldModel: deserializedVehicle.oldModel || "",
      newModel: deserializedVehicle.newModel || "",
      vin: deserializedVehicle.vin || "",
      requestNo: deserializedVehicle.requestNo || "",
      requestDate: deserializedVehicle.requestDate || "",
      requestOrigin: deserializedVehicle.requestOrigin || "",
      owner: deserializedVehicle.owner || "",
      computerNo: deserializedVehicle.computerNo || "",
      modifier: deserializedVehicle.modifier || "",
      reportNo: deserializedVehicle.reportNo || "",
    },
  });
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const onSubmit = async (data: any) => {
    setIsFetching(true);
    await fetch(`/api/vehicles/${deserializedVehicle.id}`, {
      method: "PUT",
      body: JSON.stringify(data),
    });
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
    router.push("/vehicles");
  };
  return (
    <div>
      <form
        className="grid-cols-4 gap-8 my-4 md:grid"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-control ">
          <label className="label">Vehicle Type</label>
          <input
            {...register("type", { required: true })}
            type="text"
            placeholder="Vehicle Type"
            className={classNames(
              "w-full input input-bordered ",
              errors.type && "input-error"
            )}
          />
        </div>
        <div className="form-control ">
          <label className="label">Palette No:</label>
          <input
            {...register("palette", { required: true })}
            type="text"
            placeholder="Palette Number"
            className={classNames(
              "w-full input input-bordered ",
              errors.palette && "input-error"
            )}
          />
        </div>
        <div className="form-control ">
          <label className="label">Model Year</label>
          <input
            {...register("modelYear", {
              required: true,
              minLength: 4,
              maxLength: 4,
            })}
            type="text"
            placeholder="Model Year"
            className={classNames(
              "w-full input input-bordered ",
              errors.modelYear && "input-error"
            )}
          />
        </div>
        <div className="form-control ">
          <label className="label">Old Model</label>
          <input
            {...register("oldModel", {
              required: true,
            })}
            type="text"
            placeholder="Old Model"
            className={classNames(
              "w-full input input-bordered ",
              errors.oldModel && "input-error"
            )}
          />
        </div>
        <div className="form-control ">
          <label className="label">New Model</label>
          <input
            {...register("newModel", {
              required: true,
            })}
            type="text"
            placeholder="New Model"
            className={classNames(
              "w-full input input-bordered ",
              errors.newModel && "input-error"
            )}
          />
        </div>
        <div className="col-span-2 form-control ">
          <label className="label">Vin:</label>
          <input
            {...register("vin", {
              required: true,
              maxLength: 17,
              minLength: 17,
            })}
            type="text"
            placeholder="Chassis Number 17 digits"
            className={classNames(
              "w-full input input-bordered ",
              errors.vin && "input-error"
            )}
          />
        </div>
        <div className="form-control ">
          <label className="label">Request No:</label>
          <input
            {...register("requestNo", {
              required: true,
            })}
            type="text"
            placeholder="Request No"
            className={classNames(
              "w-full input input-bordered ",
              errors.requestNo && "input-error"
            )}
          />
        </div>
        <div className="form-control ">
          <label className="label">Request Date:</label>
          <input
            {...register("requestDate", {
              required: true,
            })}
            type="date"
            placeholder="Request Date"
            className={classNames(
              "w-full input input-bordered ",
              errors.requestDate && "input-error"
            )}
          />
        </div>
        <div className="form-control ">
          <label className="label">Request Origin:</label>
          <input
            {...register("requestOrigin", {
              required: true,
            })}
            type="text"
            placeholder="Request Origin"
            className={classNames(
              "w-full input input-bordered ",
              errors.requestOrigin && "input-error"
            )}
          />
        </div>
        <div className="col-span-2 form-control ">
          <label className="label">Owner Name:</label>
          <input
            {...register("owner", {
              required: true,
            })}
            type="text"
            placeholder="Owner Name"
            className={classNames(
              "w-full input input-bordered ",
              errors.owner && "input-error"
            )}
          />
        </div>
        <div className="form-control ">
          <label className="label">Computer No:</label>
          <input
            {...register("computerNo", {
              required: true,
            })}
            type="text"
            placeholder="Computer No"
            className={classNames(
              "w-full input input-bordered ",
              errors.computerNo && "input-error"
            )}
          />
        </div>
        <div className="form-control ">
          <label className="label">Modifier:</label>
          <input
            {...register("modifier", {})}
            type="text"
            placeholder="Modifier"
            className={classNames("w-full input input-bordered ")}
          />
        </div>
        <div className="form-control ">
          <label className="label">Modifier Report No:</label>
          <input
            {...register("reportNo", {})}
            type="text"
            placeholder="Modifier Report No"
            className={classNames("w-full input input-bordered ")}
          />
        </div>
        <div className="flex flex-col col-span-4 gap-4 my-4 md:flex-row md:justify-end ">
          <Link href={"/vehicles"} className={classNames("btn")}>
            Back
          </Link>
          <button
            type="submit"
            className={classNames("btn btn-primary", isMutating && "loading")}
          >
            Update Vehicle
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateVehicleForm;

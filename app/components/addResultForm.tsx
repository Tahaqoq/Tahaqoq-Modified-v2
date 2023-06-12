"use client";
import TechnicalTest from "@/app/components/TechnicalTest";
import { colors } from "@/colors";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";
const AddResultForm = ({ vehicleId }: any) => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;

  const [formData, setFormData] = useState({
    color: "",
    weight: "",
    dimensions: "n/a",
    remarks: "",
    hasModificationReport: true,
    brakeModification: false,
    brakeResult: true,
    engineModification: false,
    engineResult: true,
    transmisionModification: false,
    transmisionResult: true,
    fuelModification: false,
    fuelResult: true,
    wheelsModification: false,
    wheelsResult: true,
    entertainmentModification: false,
    entertainmentResult: true,
    chassisModification: false,
    chassisResult: true,
    edgesModification: false,
    edgesResult: true,
    exhaustModification: false,
    exhaustResult: true,
    steeringModification: false,
    steeringResult: true,
  });
  const testRows = [
    {
      testNo: 1,
      title: "Engine",
      handleChange: handleChange,
      inputName1: "engineModification",
      inputName2: "engineResult",
      inputValue1: formData.engineModification,
      inputValue2: formData.engineResult,
    },
    {
      testNo: 2,
      title: "Transimision",
      handleChange: handleChange,
      inputName1: "transmisionModification",
      inputName2: "transmisionResult",
      inputValue1: formData.transmisionModification,
      inputValue2: formData.transmisionResult,
    },
    {
      testNo: 3,
      title: "Exhaust System",
      handleChange: handleChange,
      inputName1: "exhaustModification",
      inputName2: "exhaustResult",
      inputValue1: formData.exhaustModification,
      inputValue2: formData.exhaustResult,
    },
    {
      testNo: 4,
      title: "Fuel System",
      handleChange: handleChange,
      inputName1: "fuelModification",
      inputName2: "fuelResult",
      inputValue1: formData.fuelModification,
      inputValue2: formData.fuelResult,
    },
    {
      testNo: 5,
      title: "Brake System",
      handleChange: handleChange,
      inputName1: "brakeModification",
      inputName2: "brakeResult",
      inputValue1: formData.brakeModification,
      inputValue2: formData.brakeResult,
    },
    {
      testNo: 6,
      title: "External Edges",
      handleChange: handleChange,
      inputName1: "edgesModification",
      inputName2: "edgesResult",
      inputValue1: formData.edgesModification,
      inputValue2: formData.edgesResult,
    },
    {
      testNo: 7,
      title: "Steering Wheel",
      handleChange: handleChange,
      inputName1: "steeringModification",
      inputName2: "steeringResult",
      inputValue1: formData.steeringModification,
      inputValue2: formData.steeringResult,
    },
    {
      testNo: 8,
      title: "Tires and Wheels",
      handleChange: handleChange,
      inputName1: "wheelsModification",
      inputName2: "wheelsResult",
      inputValue1: formData.wheelsModification,
      inputValue2: formData.wheelsResult,
    },
    {
      testNo: 9,
      title: "Entertainment System",
      handleChange: handleChange,
      inputName1: "entertainmentModification",
      inputName2: "entertainmentResult",
      inputValue1: formData.entertainmentModification,
      inputValue2: formData.entertainmentResult,
    },
    {
      testNo: 10,
      title: "Body & Chassis",
      handleChange: handleChange,
      inputName1: "chassisModification",
      inputName2: "chassisResult",
      inputValue1: formData.chassisModification,
      inputValue2: formData.chassisResult,
    },
  ];
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    const booleanValue = () => {
      const v = value.toLocaleLowerCase();
      if (v === "yes" || v === "pass") {
        return true;
      } else {
        return false;
      }
    };

    setFormData((prev) => ({ ...formData, [name]: booleanValue() }));
  }
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsFetching(true);
    await fetch(`/api/vehicles/${vehicleId}/results`, {
      method: "POST",
      body: JSON.stringify(formData),
    });
    setIsFetching(false);
    startTransition(() => {
      router.refresh();
    });
    router.push("/vehicles");
  };
  return (
    <div className="w-full">
      <h1 className="mt-8 text-2xl font-bold underline uppercase underline-offset-4">
        Add Vehicle Results
      </h1>
      <form onSubmit={handleSubmit} className="mt-8">
        <section>
          <h1 className="text-xl font-bold text-center underline underline-offset-4 ">
            Essensial requirments
          </h1>
          <div className="inline-flex items-center gap-4 p-4 my-8 rounded-md border border-[rgba(31,41,55,0.2)] dark:border-[rgba(166,173,187,0.2)] ">
            <p>The Vehicle Has Modification Report : </p>
            <label className="space-x-2 cursor-pointer label">
              <input
                type="radio"
                name="hasModificationReport"
                value={"no"}
                onChange={handleChange}
                className="radio checked:bg-error"
                checked={!formData.hasModificationReport}
              />
              <span className="label-text">NO</span>
            </label>

            <label className="space-x-2 cursor-pointer label ">
              <input
                type="radio"
                name="hasModificationReport"
                value="yes"
                onChange={handleChange}
                className="radio checked:bg-success"
                checked={formData.hasModificationReport}
              />
              <span className="label-text">YES</span>
            </label>
          </div>
          <div className="grid gap-8 md:grid-cols-3 ">
            <div className="w-full max-w-xs form-control">
              <label className="label">color</label>
              <select
                className="select select-bordered"
                name="color"
                required
                value={formData.color || ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, color: e.target.value }))
                }
              >
                <option disabled value="">
                  Select Color
                </option>
                {colors.map((color) => (
                  <option key={color.name} value={color.value}>
                    {color.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-full max-w-xs form-control">
              <label className="label">Weight</label>
              <input
                required
                type="text"
                placeholder=""
                name="weight"
                value={formData.weight || ""}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, weight: e.target.value }))
                }
                className="w-full max-w-xs input input-bordered"
              />
            </div>
<!--             <div className="w-full max-w-xs form-control hidden">
              <label className="label">Dimensions</label>
              <input
                required
                type="text"
                placeholder=""
                name="weight"
                value={formData.dimensions}
                onChange={(e) =>
                  setFormData((prev) => ({
                    ...prev,
                    dimensions: e.target.value,
                  }))
                }
                className="w-full max-w-xs input input-bordered"
              />
            </div> -->
          </div>

          <div className="max-w-xl form-control">
            <label className="label">
              <span className="label-text">Remarks & Notes</span>
            </label>
            <textarea
              className="h-24 textarea textarea-bordered"
              placeholder="Remarks"
              name="remarks"
              value={formData.remarks}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, remarks: e.target.value }))
              }
            ></textarea>
          </div>
        </section>
        <div className="mt-8 divider divider-vertical" />
        <section>
          <h1 className="text-xl font-bold text-center underline underline-offset-4 ">
            Technical Requirements
          </h1>
          <div className="mt-8 overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th className=""></th>
                  <th>Item</th>
                  <th>Modified (Yes & No)</th>
                  <th>Result (Pass & Fail)</th>
                </tr>
              </thead>
              <tbody>
                {testRows.map((test) => (
                  <TechnicalTest test={test} key={test.testNo} />
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <div className="mt-8 divider divider-vertical" />
        <section className="flex justify-end gap-4 mb-8">
          <Link href={"/vehicles"} className="btn">
            Back
          </Link>
          <button
            type="submit"
            className={classNames("btn btn-primary ", isMutating && "loading")}
          >
            Save Results
          </button>
        </section>
      </form>
    </div>
  );
};

export default AddResultForm;

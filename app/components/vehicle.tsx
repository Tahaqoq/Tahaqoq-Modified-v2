import { finalResult } from "@/lib/utils/helpers";

import classNames from "classnames";
import Link from "next/link";

const Vehicle = ({ vehicle }: any) => {
  const result = vehicle?.result ? finalResult(vehicle.result) : "N/A";

  return (
    <tr key={vehicle?.id}>
      <td>{vehicle.title}</td>
      <td>{vehicle.owner}</td>
      <td>
        <div
          className={classNames(
            "dark:text-white badge w-16 h-8 font-bold",
            result === "PASS" && "badge-success",
            result === "FAIL" && "badge-error",
            result === "N/A" && "badge-warning"
          )}
        >
          {result}
        </div>
      </td>
      <td>
        <Link href={`/vehicles/${vehicle.id}`} className="btn btn-outline">
          Edit
        </Link>
      </td>
      <td>
        <Link
          href={`/vehicles/${vehicle.id}/results`}
          className="btn btn-outline"
        >
          {vehicle?.result ? "View Result" : "Add Result"}
        </Link>
      </td>
      <td>
        <div className="flex gap-1 ">
          <Link
            target={"_blank"}
            href={`/${vehicle.id}/report`}
            className={classNames("btn", result === "N/A" && "btn-disabled")}
          >
            Report
          </Link>
        </div>
      </td>
      <td className="">
        <div className="flex gap-1">
          <Link
            target={"_blank"}
            href={`/${vehicle.id}/letter`}
            className={classNames("btn ", result === "N/A" && "btn-disabled")}
          >
            Letter
          </Link>
        </div>
      </td>
    </tr>
  );
};

export default Vehicle;

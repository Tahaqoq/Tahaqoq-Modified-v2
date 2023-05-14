import { getVehicles } from "@/lib/prisma/vehicle";
import { UrlSearchParams } from "@/types";
import Link from "next/link";
import Pagination from "../../components/pagination";
import SearchForm from "../../components/searchForm";
import Vehicle from "../../components/vehicle";

const PAGE_SIZE = 10;

const page = async ({ searchParams }: { searchParams: UrlSearchParams }) => {
  const page: number = !!searchParams.page ? parseInt(searchParams.page) : 1;
  const pageSize: number = !!searchParams.pageSize
    ? parseInt(searchParams.pageSize)
    : PAGE_SIZE;
  const search: string = searchParams.search || "";

  const { vehicles, totalPages } = await getVehicles(page, pageSize, search);

  return (
    <div className="flex flex-col flex-1">
      <div className="flex flex-col-reverse justify-center gap-4 mt-8 md:justify-between md:flex-row">
        <SearchForm />
        <Link href={"/vehicles/new"} className=" md:ml-4 btn btn-primary">
          New Vehicle
        </Link>
      </div>
      <div className="overflow-x-auto grow ">
        <table className="table w-full mt-8 table-normal">
          <thead>
            <tr>
              <th>Title</th>
              <th>Owner Name</th>
              <th>Final Result</th>
              <th>View</th>
              <th>Results</th>
              <th>Report</th>
              <th>Letter</th>
            </tr>
          </thead>
          <tbody>
            {vehicles?.map((vehicle) => (
              <Vehicle vehicle={vehicle} key={vehicle.id} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center my-8 ">
        <Pagination
          totalPages={totalPages}
          currentPage={page}
          pageSize={pageSize}
        />
      </div>
    </div>
  );
};

export default page;

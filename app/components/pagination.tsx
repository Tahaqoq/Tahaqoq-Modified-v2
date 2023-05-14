import classNames from "classnames";
import Link from "next/link";
import { FC } from "react";

type PaginationProps = {
  totalPages: number | undefined;
  currentPage: number | undefined;
  pageSize: number | undefined;
};
const Pagination: FC<PaginationProps> = ({
  totalPages = 1,
  currentPage = 1,
  pageSize = 10,
}) => {
  const pagesArr = Array.from({ length: totalPages }, (_, i) => i + 1);
  const nextPage = () => {
    if (currentPage + 1 > totalPages) return currentPage;
    return currentPage + 1;
  };
  const prevPage = () => {
    if (currentPage === 1) return currentPage;
    return currentPage - 1;
  };
  return (
    <div className="btn-group">
      <Link
        href={`/vehicles?page=${prevPage()}&pageSize=${pageSize}`}
        className="btn btn-sm"
      >
        Prev
      </Link>
      {pagesArr.map((page) => (
        <Link
          key={page}
          href={`/vehicles?page=${page}&pageSize=${pageSize}`}
          className={classNames(
            "btn btn-sm",
            currentPage === page && "btn-active"
          )}
        >
          {page}
        </Link>
      ))}

      <Link
        href={`/vehicles?page=${nextPage()}&pageSize=${pageSize}`}
        className="btn btn-sm"
      >
        Next
      </Link>
    </div>
  );
};

export default Pagination;

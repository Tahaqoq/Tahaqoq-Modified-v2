"use client";
import classNames from "classnames";
import { useRef } from "react";

const SearchForm = ({ searchParams }: any) => {
  console.log(searchParams);
  const searchRef = useRef<HTMLInputElement>(null);
  const search = () => {
    if (searchRef.current?.value) {
      const url = new URL(window.location.href);
      url.searchParams.set("search", searchRef.current?.value);
      window.location.href = url.toString();
    }
  };

  const clear = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete("search");
    window.location.href = url.toString();
  };
  return (
    <form>
      <div className="flex flex-col gap-4 md:flex-row">
        <input
          ref={searchRef}
          type="search"
          placeholder="Search...."
          className="w-full md:max-w-xs input input-bordered"
        />
        <div className="flex gap-2">
          <button
            onClick={search}
            className={classNames("btn flex-1 ")}
            type="button"
          >
            Search
          </button>
          <button onClick={clear} className="btn btn-outline">
            clear
          </button>
        </div>
      </div>
    </form>
  );
};

export default SearchForm;

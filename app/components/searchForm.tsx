"use client";
import classNames from "classnames";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef } from "react";

const SearchForm = () => {
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
      <div className="flex gap-2">
        <input
          ref={searchRef}
          type="search"
          placeholder="Search...."
          className="w-full max-w-xs input input-bordered"
        />
        <button onClick={search} className={classNames("btn")} type="button">
          Search
        </button>
        <button onClick={clear} className="btn btn-outline">
          clear search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;

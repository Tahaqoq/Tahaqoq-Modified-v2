"use client";
import "../../globals.css";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";

export default function RegisterPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isFetching, setIsFetching] = useState(false);
  const isMutating = isFetching || isPending;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = async (data: any) => {
    setIsFetching(true);
    await fetch(`/api/users`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    setIsFetching(false);
    startTransition(() => {
      //router.refresh();
    });
    router.push("/auth/signin");
  };
  return (
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
        >
          TAHAQOQ
        </a>

        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Register
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Name
                </label>
                <input
                  {...register("name", { required: true })}
                  type="text"
                  id="name"
                  className={classNames(
                    "input input-bordered w-full",
                    errors.name && "input-error"
                  )}
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  id="email"
                  className={classNames(
                    "input input-bordered w-full",
                    errors.email && "input-error"
                  )}
                  placeholder="name@company.com"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  {...register("password", { required: true })}
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className={classNames(
                    "input input-bordered w-full",
                    errors.password && "input-error"
                  )}
                />
              </div>

              <button
                type="submit"
                className={classNames("btn btn-block", isMutating && "loading")}
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

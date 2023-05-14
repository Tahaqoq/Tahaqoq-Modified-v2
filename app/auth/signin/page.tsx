"use client";
import "../../globals.css";
import { signIn, useSession } from "next-auth/react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import classNames from "classnames";

export default function SignInPage() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams?.get("callbackUrl");
  const { data: session } = useSession();
  if (session) {
    redirect(callbackUrl || "/");
  }

  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
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
    const res = await signIn("credentials", {
      ...data,
      callbackUrl,
      redirect: false,
    });
    setError(res?.error || null);

    setIsFetching(false);
    startTransition(() => {
      // router.push(callbackUrl || "/");
    });
    // reset();
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
            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-2xl dark:text-white">
              Login
            </h1>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4 md:space-y-6"
            >
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
                    "input input-bordered w-full ",
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
                    "input input-bordered w-full ",
                    errors.password && "input-error"
                  )}
                />
              </div>
              {error && error === "CredentialsSignin" && (
                <div className="shadow-lg alert alert-error">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-6 h-6 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Error! Wrong credintials.</span>
                  </div>
                </div>
              )}
              {error && error === "AccessDenied" && (
                <div className="shadow-lg alert alert-error">
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="flex-shrink-0 w-6 h-6 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Error! AccessDenied.</span>
                  </div>
                </div>
              )}
              <button
                type="submit"
                className={classNames("btn btn-block", isMutating && "loading")}
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

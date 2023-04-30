import useAuth from "@/hooks/useAuth";
import { CheckIcon } from "@heroicons/react/24/outline";
import Head from "next/head";
import Link from "next/link";
import React from "react";

function Plans() {
  const {logout} = useAuth()

  return (
    <div>
      <Head>
        <title>Netflix</title>
      </Head>

      <header className="border-b border-white/10 bg-[#141414]">
        <Link href="/">
          <img
            src="https://rb.gy/ulxxee"
            alt="Netflix"
            width={150}
            height={90}
            className="cursor-pointer object-contain"
          />
        </Link>
        <button
          className="text-lg font-medium hover:underline"
          onClick={logout}
        >
          Sign Out
        </button>
      </header>

      <main className="pt-28 max-w-5xl px-5 pb-12 transition-all md:px-10">
        <h1 className="mb-3 text-3xl font-medium">Choose the plan that's right for you</h1>
        <ul>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="check__icon" /> Watch all you want.
            Ad-free.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="check__icon" /> Recommendations
            just for you.
          </li>
          <li className="flex items-center gap-x-2 text-lg">
            <CheckIcon className="check__icon" /> Change or cancel
            your plan anytime.
          </li>
        </ul>

        <div className="mt-4 flex flex-col space-y-4 ">
          <div className="flex w-full items-center justify-center self-end md:w-3/5">
            <div className="planBox" ></div>
            <div className="planBox" ></div>
            <div className="planBox" ></div>
          </div>

          {/* <Table /> */}

          <button>Subscribe</button>
        </div>
      </main>
    </div>
  );
}

export default Plans;

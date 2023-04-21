import Head from "next/head";
import Image from "next/legacy/image";
import React from "react";

function Login() {
  return (
    <div className="relative flex flex-col h-screen w-screen bg-black md:items-center md:justify-center md:bg-transparent">
      <Head>
      <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Image
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d0982892-13ac-4702-b9fa-87a410c1f2da/519e3d3a-1c8c-4fdb-8f8a-7eabdbe87056/AE-en-20220321-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        layout="fill"
        className="-z-10 !hidden opacity-60 sm:!inline"
        objectFit="cover"
      />
    </div>
  );
}

export default Login;

import Head from "next/head";
import React, { ReactNode } from "react";
import NavBar from "./Navigation/NavBar";

interface PageProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

const Page = ({ title, children, className }: PageProps) => {
  let pageClassName =
    "px-4 pt-10 pb-20 mt-24 text-stone-700 bg-slate-100 dark:bg-neutral-800 dark:text-zinc-300	";
  if (className) {
    pageClassName += ` ${className}`;
  }

  return (
    <>
      <Head>
        <title>{title} Tee House</title>
      </Head>
      <NavBar />
      <main className={pageClassName}>{children}</main>
    </>
  );
};

export default Page;

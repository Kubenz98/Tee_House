import Head from "next/head";
import React, { ReactNode } from "react";
import NavBar from "./NavBar";

interface PageProps {
  title: string;
  children?: ReactNode;
  className?: string;
}

const Page = ({ title, children, className }: PageProps) => {
  const pageClassName = className ? `${className} mx-4 px-4 py-4 mt-24 text-stone-700` : `px-4 py-4 mt-24 text-stone-700`

  return (
    <>
      <Head>
        <title>{title} Green House</title>
      </Head>
      <NavBar />
      <main className={pageClassName}>{children}</main>
    </>
  );
};

export default Page;

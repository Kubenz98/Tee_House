import NavBar from "@/components/NavBar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Green House - your plants</title>
        <meta name="description" content="Get your favourite plants!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <main className="px-6 py-4">
        <h1 className="text-2xl">Main Page</h1>
      </main>
    </>
  );
}

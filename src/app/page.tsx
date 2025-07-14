import { Hero, Menu } from "@/components/ui";
import VideoScrollClient from "@/components/client/VideoScrollClient";
import Head from "next/head";

// Home page component
export default function Home() {
  return (
    <>
      <Head>
        <title>Aquí – Bold local craft beers & signature cocktails</title>
        <meta
          name="description"
          content="Discover bold craft beers, signature cocktails, and local favorites at Aquí. Taste the soul of the city poured with passion."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative">
        <Hero />
        <VideoScrollClient />
      </div>
      {/* <Signatures /> */}
      <Menu />
      <div className="min-h-dvh"></div>
    </>
  );
}

import { Hero } from "@/components/index";
import Head from "next/head";

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

      <Hero />
      <div className="h-screen"></div>
      <div className="h-screen"></div>
    </>
  );
}

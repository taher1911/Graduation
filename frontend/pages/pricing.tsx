import Footer from "@/components/Footer";
import Prices from "@/components/pages/home/Prices";
import Landing from "@/components/pages/price/Landing";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Pricing() {
  return (
    <>
      <Head>
        <title>Pricing</title>
        <meta
          name="description"
          content="Detectiva website uses latest deep learning algorithms and AI techniques to make deepfake video identification easier."
        />
      </Head>
      <Navbar />
      <main
        className={`flex min-h-screen flex-col items-center justify-between ${inter.className}`}
      >
        <Landing />
        <Prices />
      </main>
      <Footer />
    </>
  );
}

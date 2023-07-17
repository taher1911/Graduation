import Footer from "@/components/Footer";
import Check from "@/components/pages/about/Check";
import ImageScetion from "@/components/pages/about/ImageScetion";
import Landing from "@/components/pages/about/Landing";
import Steps from "@/components/pages/about/Steps";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  return (
    <>
      <Head>
        <title>About</title>
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
        <Steps />
        <ImageScetion />
        <Check />
        <Footer />
      </main>
    </>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Process from "@/components/Home/process";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar activePage="services" />
      <main>
        <Hero />
        <Services />
        <Process />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
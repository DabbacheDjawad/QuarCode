import Navbar from "@/components/Navbar";
import Hero from "@/components/Home/Hero";
import Services from "@/components/Home/Services";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar activePage="services" />
      <main>
        <Hero />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
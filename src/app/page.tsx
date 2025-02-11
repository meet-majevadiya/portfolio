import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import IntroSection from "@/components/IntroSection";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <IntroSection />
      <AboutMe />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

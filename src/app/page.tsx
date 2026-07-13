import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Packages } from "@/components/Packages";
import { Events } from "@/components/Events";
import { Shop } from "@/components/Shop";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Packages />
        <Events />
        <Shop />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

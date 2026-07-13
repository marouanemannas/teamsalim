import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Story } from "@/components/Story";
import { About } from "@/components/About";
import { Activities } from "@/components/Activities";
import { Events } from "@/components/Events";
import { News } from "@/components/News";
import { Shop } from "@/components/Shop";
import { Newsletter } from "@/components/Newsletter";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Story />
        <About />
        <Activities />
        <Events />
        <News />
        <Shop />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}

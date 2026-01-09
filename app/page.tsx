import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { CharacterCarousel } from "./components/CharacterCarousel";
import { EpisodeShowcase } from "./components/EpisodeShowcase";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navigation />
      <main>
        <Hero />
        <CharacterCarousel />
        <EpisodeShowcase />
      </main>
      <Footer />
    </div>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Projects } from "@/components/portfolio/Projects";
import { Skills } from "@/components/portfolio/Skills";
import { CreativeSide } from "@/components/portfolio/CreativeSide";
import { Process } from "@/components/portfolio/Process";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Blobs } from "@/components/portfolio/Blobs";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Astrid — Esprit structuré, âme créative" },
      {
        name: "description",
        content:
          "Portfolio d'Astrid, développeuse full-stack C# .NET et React TypeScript basée à Bordeaux. Rigueur d'ingénieur, sensibilité d'artiste.",
      },
      { property: "og:title", content: "Astrid — Esprit structuré, âme créative" },
      {
        property: "og:description",
        content:
          "Développeuse full-stack à Bordeaux. .NET, React, TypeScript. Et une sensibilité aux arts, à la musique et au mouvement.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background text-foreground">
      <Blobs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <CreativeSide />
        <Process />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

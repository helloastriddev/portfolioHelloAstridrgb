import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Blobs } from "@/components/portfolio/Blobs";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sofia — Développeuse C# .NET & React TypeScript" },
      {
        name: "description",
        content:
          "Portfolio de Sofia, développeuse full-stack qui crée des produits POP avec C#/.NET, React + TypeScript, SQL, et une vraie curiosité pour l'IA.",
      },
      { property: "og:title", content: "Sofia — Portfolio Développeuse Full-stack" },
      {
        property: "og:description",
        content: "Développeuse full-stack .NET & React TypeScript qui crée des produits audacieux et soignés.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Blobs />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" />
    </div>
  );
}

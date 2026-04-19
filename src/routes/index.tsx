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
      { title: "Sofia — C# .NET & React TypeScript Developer" },
      {
        name: "description",
        content:
          "Portfolio of Sofia, a full-stack developer building delightful software with C#/.NET, React + TypeScript, SQL, and a curiosity for AI.",
      },
      { property: "og:title", content: "Sofia — Full-stack Developer Portfolio" },
      {
        property: "og:description",
        content: "Full-stack .NET & React TypeScript developer crafting clean, thoughtful products.",
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

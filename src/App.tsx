import { I18nProvider } from "@/lib/i18n";
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

export default function App() {
  return (
    <I18nProvider>
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
    </I18nProvider>
  );
}

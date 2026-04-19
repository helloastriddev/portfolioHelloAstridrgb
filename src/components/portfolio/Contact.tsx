import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export function Contact() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Message envoyé ! Je te réponds très vite ✨");
    }, 800);
  };

  const links = [
    { icon: Mail, label: "Email", value: "hello@sofia.dev", href: "mailto:hello@sofia.dev", bg: "bg-primary text-primary-foreground" },
    { icon: Github, label: "GitHub", value: "@sofia-dev", href: "https://github.com", bg: "bg-foreground text-background" },
    { icon: Linkedin, label: "LinkedIn", value: "in/sofia-dev", href: "https://linkedin.com", bg: "bg-secondary text-secondary-foreground" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-hero px-6 py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 dots-bg opacity-30" />

      <div className="relative mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground pop-border shadow-soft">
            Contact
          </p>
          <h2 className="font-display text-5xl uppercase tracking-wide md:text-6xl">
            Construisons <span className="text-secondary text-stroke-thin">quelque chose de POP</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-medium text-foreground">
            Un projet en tête, un poste à pourvoir, ou juste envie de dire coucou ? Écris-moi !
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className={`group flex items-center gap-4 rounded-2xl ${l.bg} p-5 pop-border shadow-card transition-transform hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-lift`}
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-card text-foreground pop-border-2 transition-transform group-hover:rotate-[-8deg]">
                  <l.icon className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider opacity-80">{l.label}</div>
                  <div className="font-display text-lg uppercase tracking-wide">{l.value}</div>
                </div>
              </a>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-3 space-y-4 rounded-3xl bg-card p-6 pop-border shadow-lift md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-bold uppercase text-xs tracking-wider">Nom</Label>
                <Input id="name" name="name" required placeholder="Jeanne Dupont" className="rounded-xl pop-border-2" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-bold uppercase text-xs tracking-wider">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="jeanne@exemple.com" className="rounded-xl pop-border-2" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="font-bold uppercase text-xs tracking-wider">Message</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Parle-moi de ton projet..." className="rounded-xl pop-border-2" />
            </div>
            <Button
              type="submit"
              disabled={sending}
              size="lg"
              className="w-full rounded-full bg-primary text-primary-foreground pop-border shadow-soft hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-glow transition-transform font-bold uppercase tracking-wide"
            >
              {sending ? "Envoi en cours..." : (<><Send className="mr-1 h-4 w-4" /> Envoyer le message</>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

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
      toast.success("Message sent! I'll get back to you soon ✨");
    }, 800);
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-hero px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">Contact</p>
          <h2 className="font-display text-4xl font-semibold tracking-tight md:text-5xl">
            Let's build <span className="text-gradient">something lovely</span>.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Have a project in mind, a role to fill, or just want to say hi? Drop a message.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-5">
          <div className="md:col-span-2 space-y-4">
            <a
              href="mailto:hello@sofia.dev"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft transition-transform group-hover:scale-110">
                <Mail className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
                <div className="font-medium">hello@sofia.dev</div>
              </div>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft transition-transform group-hover:scale-110">
                <Github className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</div>
                <div className="font-medium">@sofia-dev</div>
              </div>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-soft transition-transform group-hover:scale-110">
                <Linkedin className="h-5 w-5" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</div>
                <div className="font-medium">in/sofia-dev</div>
              </div>
            </a>
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-3 space-y-4 rounded-3xl border border-border bg-card p-6 shadow-card md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" name="name" required placeholder="Jane Doe" className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" required placeholder="jane@example.com" className="rounded-xl" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" required rows={5} placeholder="Tell me about your project..." className="rounded-xl" />
            </div>
            <Button
              type="submit"
              disabled={sending}
              size="lg"
              className="w-full rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:opacity-95"
            >
              {sending ? "Sending..." : (<><Send className="mr-1 h-4 w-4" /> Send message</>)}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

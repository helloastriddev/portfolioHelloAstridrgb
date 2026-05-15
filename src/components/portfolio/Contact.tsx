import { useState } from "react";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success(t("contact.success") as string);
    }, 800);
  };

  const links = [
    { icon: Mail, label: "Email", value: "hello@astridrgb.dev", href: "mailto:hello@astridrgb.dev" },
    { icon: Github, label: "GitHub", value: "@helloastrid-dev", href: "https://github.com/helloastrid-dev" },
    { icon: Linkedin, label: "LinkedIn", value: "in/astrid-rangba", href: "https://www.linkedin.com/in/astrid-rangba" },
  ];

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="relative mx-auto max-w-6xl">
        <div className="mb-16 grid gap-8 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-secondary">{t("contact.eyebrow") as string}</p>
            <h2 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight md:text-7xl">
              {t("contact.titleA") as string} <span className="italic-serif text-primary">{t("contact.titleB") as string}</span>.
            </h2>
          </div>
          <p className="md:col-span-4 text-muted-foreground">{t("contact.intro") as string}</p>
        </div>

        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5 space-y-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center justify-between border-b border-border py-5 transition-colors hover:border-secondary"
              >
                <div className="flex items-center gap-4">
                  <l.icon className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-secondary" />
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{l.label}</div>
                    <div className="font-display text-xl tracking-tight">{l.value}</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
              </a>
            ))}
          </div>

          <form
            onSubmit={onSubmit}
            className="md:col-span-6 md:col-start-7 space-y-5 rounded-3xl border border-border bg-card p-8 shadow-soft md:p-10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t("contact.nameLabel") as string}
                </Label>
                <Input id="name" name="name" required placeholder={t("contact.namePlaceholder") as string} className="rounded-xl border-border bg-background" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                  {t("contact.emailLabel") as string}
                </Label>
                <Input id="email" name="email" type="email" required placeholder={t("contact.emailPlaceholder") as string} className="rounded-xl border-border bg-background" />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message" className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                {t("contact.messageLabel") as string}
              </Label>
              <Textarea id="message" name="message" required rows={6} placeholder={t("contact.messagePlaceholder") as string} className="rounded-xl border-border bg-background" />
            </div>
            <button
              type="submit"
              disabled={sending}
              className="paint-blob paint-texture w-full bg-primary px-8 py-4 text-base font-medium text-primary-foreground shadow-soft transition-shadow hover:shadow-glow disabled:opacity-60"
            >
              {sending ? (t("contact.sending") as string) : (t("contact.submit") as string)}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

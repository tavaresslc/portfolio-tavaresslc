import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";
import { env } from "../../config/env";
import { useLang } from "../../contexts/LangContext";
import { GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "../ui/icons";
import { Reveal } from "../ui/reveal";
import { SectionTitle } from "../ui/section-title";
import { Button } from "../button";

type Status = "idle" | "sending" | "ok" | "err";

export function Contact() {
  const { t } = useLang();
  const [status, setStatus] = useState<Status>("idle");

  const channels = [
    {
      label: "E-mail",
      href: `mailto:${env.EMAIL}`,
      icon: MailIcon,
      show: !!env.EMAIL,
      sub: env.EMAIL,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/in/${env.LINKEDIN}`,
      icon: LinkedinIcon,
      show: true,
      sub: `/in/${env.LINKEDIN}`,
    },
    {
      label: "GitHub",
      href: `https://github.com/${env.GITHUB}`,
      icon: GithubIcon,
      show: true,
      sub: `@${env.GITHUB}`,
    },
    {
      label: "WhatsApp",
      href: `https://wa.me/${env.WHATSAPP}`,
      icon: WhatsappIcon,
      show: !!env.WHATSAPP,
      sub: "wa.me",
    },
  ].filter((c) => c.show);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus("sending");
    try {
      // FormSubmit: envia o e-mail sem backend proprio (veja o README).
      const res = await fetch(`https://formsubmit.co/ajax/${env.EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
          _subject: `Portfolio: mensagem de ${data.get("name")}`,
          _replyto: data.get("email"),
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("err");
    }
  }

  const field =
    "w-full rounded-xl border border-line bg-bg2 px-4 py-3 outline-none transition-colors focus:border-accent placeholder:text-muted/60";

  return (
    <section id="contact" className="px-5 md:px-12 lg:px-32 py-24">
      <SectionTitle
        kicker={t("contact.kicker")}
        title={t("contact.title")}
        sub={t("contact.sub")}
      />

      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-8">
        <Reveal>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-1 gap-4">
            {channels.map(({ label, href, icon: Icon, sub }) => (
              <li key={label}>
                <a
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer noopener"
                  aria-label={label}
                  className="group flex items-center gap-4 rounded-(--radius) border border-line bg-card p-5 hover:border-accent hover:-translate-y-0.5 transition-all"
                >
                  <span className="w-12 h-12 shrink-0 rounded-xl border border-line bg-bg2 grid place-items-center text-accent group-hover:bg-accent group-hover:text-bg transition-colors">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold">{label}</span>
                    <span className="block font-mono text-xs text-muted truncate">
                      {sub}
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="rounded-(--radius) border border-line bg-card p-6 md:p-8 space-y-4"
          >
            <label className="block">
              <span className="font-mono text-xs text-muted">
                {t("contact.name")}
              </span>
              <input
                name="name"
                required
                maxLength={80}
                placeholder={t("contact.ph.name")}
                className={`${field} mt-1.5`}
              />
            </label>
            <label className="block">
              <span className="font-mono text-xs text-muted">
                {t("contact.email")}
              </span>
              <input
                name="email"
                type="email"
                required
                maxLength={120}
                placeholder={t("contact.ph.email")}
                className={`${field} mt-1.5`}
              />
            </label>
            <label className="block">
              <span className="font-mono text-xs text-muted">
                {t("contact.message")}
              </span>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={2000}
                placeholder={t("contact.ph.message")}
                className={`${field} mt-1.5 resize-y`}
              />
            </label>

            <div className="flex flex-wrap items-center gap-4">
              <Button
                type="submit"
                disabled={status === "sending"}
                className="px-5! py-2.5!"
              >
                <Send className="w-4 h-4" />
                {status === "sending"
                  ? t("contact.sending")
                  : t("contact.send")}
              </Button>
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${status === "ok" ? "text-accent" : "text-[#ef4444]"}`}
              >
                {status === "ok" && t("contact.ok")}
                {status === "err" && t("contact.err")}
              </p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

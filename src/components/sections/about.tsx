import { Code2, Compass, GraduationCap, Languages } from "lucide-react";
import { stack } from "../../data/portfolio";
import { useLang } from "../../contexts/LangContext";
import { Reveal } from "../ui/reveal";
import { SectionTitle } from "../ui/section-title";

export function About() {
  const { t } = useLang();

  const facts = [
    { icon: Code2, k: t("about.focus"), v: t("about.focus.value") },
    { icon: GraduationCap, k: t("about.degree"), v: t("about.degree.value") },
    { icon: Compass, k: t("about.interests"), v: t("about.interests.value") },
    { icon: Languages, k: t("about.langs"), v: t("about.langs.value") },
  ];

  return (
    <section id="about" className="px-5 md:px-12 lg:px-32 py-24">
      <SectionTitle kicker={t("about.kicker")} title={t("about.title")} />

      <div className="grid lg:grid-cols-2 gap-6">
        <Reveal>
          <article className="h-full rounded-(--radius) border border-line bg-card p-7">
            <span className="inline-block font-mono text-xs px-2.5 py-1 rounded-full border border-line text-accent mb-4">
              PT-BR
            </span>
            <p className="text-lg leading-relaxed">{t("about.pt")}</p>
          </article>
        </Reveal>
        <Reveal delay={120}>
          <article className="h-full rounded-(--radius) border border-line bg-card p-7">
            <span className="inline-block font-mono text-xs px-2.5 py-1 rounded-full border border-line text-accent2 mb-4">
              EN
            </span>
            <p className="text-lg leading-relaxed">{t("about.en")}</p>
          </article>
        </Reveal>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {facts.map(({ icon: Icon, k, v }, i) => (
          <Reveal key={k} delay={i * 80}>
            <div className="h-full rounded-(--radius) border border-line bg-bg2 p-5 hover:border-accent transition-colors">
              <Icon className="w-5 h-5 text-accent mb-3" />
              <p className="font-mono text-xs text-muted">{k}</p>
              <p className="font-semibold mt-1">{v}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal>
        <div className="mt-10">
          <p className="font-mono text-sm text-muted mb-4">
            {t("about.stack")}
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {stack.map((s) => (
              <li
                key={s}
                className="chip-tech font-mono text-sm px-3.5 py-1.5 rounded-full border border-line bg-card"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
}

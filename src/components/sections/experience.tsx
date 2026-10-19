import { Briefcase, GitPullRequest, GraduationCap } from "lucide-react";
import { experiences } from "../../data/portfolio";
import { useLang } from "../../contexts/LangContext";
import { Reveal } from "../ui/reveal";
import { SectionTitle } from "../ui/section-title";

const icons = { edu: GraduationCap, oss: GitPullRequest, work: Briefcase };

export function Experience() {
  const { t, lang } = useLang();

  return (
    <section id="xp" className="px-5 md:px-12 lg:px-32 py-24">
      <SectionTitle
        kicker={t("xp.kicker")}
        title={t("xp.title")}
        sub={t("xp.sub")}
      />

      <div className="grid md:grid-cols-2 gap-6">
        {experiences.map((e, i) => {
          const Icon = icons[e.kind];
          const Wrapper = e.link ? "a" : "div";
          return (
            <Reveal key={e.id} delay={i * 100}>
              <Wrapper
                {...(e.link
                  ? {
                      href: e.link,
                      target: "_blank",
                      rel: "noreferrer noopener",
                    }
                  : {})}
                className="block h-full rounded-(--radius) border border-line bg-card p-7 hover:border-accent transition-colors group"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="w-11 h-11 rounded-xl bg-linear-to-br from-accent to-accent2 grid place-items-center text-bg">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs px-2.5 py-1 rounded-full border border-line text-muted">
                    {e.period[lang]}
                  </span>
                </div>
                <h3 className="text-xl font-bold mt-5">{e.org}</h3>
                <p className="text-accent font-medium mt-1">{e.role[lang]}</p>
                <p className="text-muted mt-3 leading-relaxed">
                  {e.description[lang]}
                </p>
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}

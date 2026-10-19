import { ExternalLink } from "lucide-react";
import { projects } from "../../data/portfolio";
import { useLang } from "../../contexts/LangContext";
import { GithubIcon } from "../ui/icons";
import { ProjectPreview } from "../ui/project-preview";
import { Reveal } from "../ui/reveal";
import { SectionTitle } from "../ui/section-title";
import { Button } from "../button";

export function Projects() {
  const { t, lang } = useLang();

  return (
    <section id="projects" className="px-5 md:px-12 lg:px-32 py-24">
      <SectionTitle
        kicker={t("projects.kicker")}
        title={t("projects.title")}
        sub={t("projects.sub")}
      />

      <ol className="relative">
        {/* linha vertical da timeline */}
        <span className="absolute left-2.75 md:left-1/2 md:-translate-x-px top-2 bottom-2 w-0.5 bg-linear-to-b from-accent via-accent2 to-transparent" />

        {projects.map((p, i) => {
          const left = i % 2 === 0;
          return (
            <li
              key={p.id}
              className="relative md:grid md:grid-cols-2 md:gap-16 pl-10 md:pl-0 pb-14 last:pb-0"
            >
              {/* nó */}
              <span className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-1.5 w-6 h-6 rounded-full border-2 border-accent bg-bg grid place-items-center">
                <span className="w-2 h-2 rounded-full bg-accent pulse-dot" />
              </span>

              <Reveal className={left ? "md:col-start-1" : "md:col-start-2"}>
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")} /{" "}
                  {String(projects.length).padStart(2, "0")}
                </span>
                <h3 className="text-2xl font-bold mt-1">{p.name}</h3>
                <p className="text-muted mt-3 leading-relaxed">
                  {p.description[lang]}
                </p>

                <p className="font-mono text-xs text-muted mt-5 mb-2">
                  {t("projects.stack")}
                </p>
                <ul className="flex flex-wrap gap-2">
                  {p.tech.map((x) => (
                    <li
                      key={x}
                      className="font-mono text-xs px-2.5 py-1 rounded-full border border-line bg-card"
                    >
                      {x}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-3 mt-6">
                  <Button href={p.repo} external color="secondary" chip>
                    <GithubIcon className="w-4 h-4" />
                    {t("projects.repo")}
                  </Button>
                  {p.live && (
                    <Button href={p.live} external color="secondary" chip>
                      <ExternalLink className="w-4 h-4" />
                      {t("projects.live")}
                    </Button>
                  )}
                </div>
              </Reveal>

              <Reveal
                delay={120}
                className={`mt-6 md:mt-0 ${left ? "md:col-start-2 md:row-start-1" : "md:col-start-1 md:row-start-1"}`}
              >
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={p.name}
                  className="block project-shot"
                >
                  <ProjectPreview project={p} />
                </a>
              </Reveal>
            </li>
          );
        })}
      </ol>
    </section>
  );
}

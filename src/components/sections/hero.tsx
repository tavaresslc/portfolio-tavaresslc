import { useEffect, useState } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import { env } from "../../config/env";
import { useLang } from "../../contexts/LangContext";
import { Button } from "../button";
import { DotField } from "../ui/dot-field";

const roles = ["full stack", "back-end", "React", "machine learning"];

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(word.slice(0, text.length + 1));
          if (text.length + 1 === word.length)
            setTimeout(() => setDel(true), 900);
        } else {
          setText(word.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((n) => n + 1);
          }
        }
      },
      del ? 40 : 90,
    );
    return () => clearTimeout(t);
  }, [text, del, i, words]);

  return text;
}

export function Hero() {
  const { t } = useLang();
  const typed = useTyping(roles);

  return (
    <section className="relative isolate overflow-hidden min-h-[calc(100svh-61px)] flex items-center px-5 md:px-12 lg:px-32 py-16">
      <DotField />
      <div className="absolute -z-10 -top-24 -right-24 w-md h-112 rounded-full bg-accent2/20 blur-3xl" />
      <div className="absolute -z-10 bottom-0 -left-24 w-[24rem] h-96 rounded-full bg-accent/15 blur-3xl" />

      <div className="relative grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        <div>
          <p className="font-mono text-sm text-accent mb-4">
            {t("hero.hello")}
          </p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.02]">
            {env.NAME.split(" ").slice(0, 2).join(" ")}
            <br />
            <span className="bg-linear-to-r from-accent to-accent2 bg-clip-text text-transparent">
              {env.NAME.split(" ").slice(2).join(" ")}
            </span>
          </h1>
          <p className="mt-6 text-xl text-muted max-w-xl">{t("hero.role")}</p>
          <p className="mt-2 font-mono text-lg">
            <span className="text-muted">&gt; </span>
            <span className="text-accent">{typed}</span>
            <span className="caret" />
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="#projects" className="px-5! py-2.5!">
              {t("hero.cta.projects")}
              <ArrowDown className="w-4 h-4" />
            </Button>
            <Button href="#contact" color="secondary" className="px-5! py-2.5!">
              {t("hero.cta.contact")}
            </Button>
          </div>
          <p className="mt-8 flex items-center gap-2 text-sm text-muted font-mono">
            <MapPin className="w-4 h-4 text-accent" />
            {t("hero.location")}
          </p>
        </div>

        <Terminal />
      </div>
    </section>
  );
}

function Terminal() {
  const lines: [string, string, string?][] = [
    ["$", "whoami", ""],
    ["", env.NAME, "text-text"],
    ["$", "cat stack.json", ""],
    ["", '{ "front": ["React", "Angular", "TS"],', "text-accent"],
    ["", '  "back": ["Java", "Spring", "Node"],', "text-accent"],
    ["", '  "data": ["Python", "Postgres"] }', "text-accent"],
    ["$", "git log --oneline -1", ""],
    ["", "feat: building things that matter", "text-accent2"],
  ];
  return (
    <div className="float rounded-2xl border border-line bg-bg2/80 backdrop-blur shadow overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-line bg-card">
        <i className="w-3 h-3 rounded-full bg-[#ff5f57]" />
        <i className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <i className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-xs text-muted">
          ~/{env.GITHUB}
        </span>
      </div>
      <div className="p-5 font-mono text-[13px] sm:text-sm leading-7 overflow-x-auto">
        {lines.map(([p, txt, c], i) => (
          <div
            key={i}
            className="term-line whitespace-pre"
            style={{ animationDelay: `${i * 260 + 300}ms` }}
          >
            {p && <span className="text-accent2 mr-2">{p}</span>}
            <span className={c || "text-text"}>{txt}</span>
          </div>
        ))}
        <div
          className="term-line"
          style={{ animationDelay: `${lines.length * 260 + 300}ms` }}
        >
          <span className="text-accent2 mr-2">$</span>
          <span className="caret" />
        </div>
      </div>
    </div>
  );
}

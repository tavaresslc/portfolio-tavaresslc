import { useEffect, useMemo, useRef, useState } from "react";
import { CornerDownLeft, Languages, Moon, Search } from "lucide-react";
import { env } from "../../config/env";
import { projects } from "../../data/portfolio";
import { useLang } from "../../contexts/LangContext";
import { useTheme } from "../../contexts/ThemeContext";
import { GithubIcon, LinkedinIcon, MailIcon } from "../ui/icons";

type Cmd = {
  id: string;
  label: string;
  hint: string;
  icon: React.ReactNode;
  run: () => void;
};

/** Paleta de comandos (Ctrl/⌘ + K): navegar, abrir projetos, trocar tema/idioma. */
export function Palette({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { t, toggleLang } = useLang();
  const { toggleTheme } = useTheme();
  const [q, setQ] = useState("");
  const [idx, setIdx] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const go = (hash: string) => () => {
    document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
  };
  const ext = (url: string) => () =>
    window.open(url, "_blank", "noopener,noreferrer");

  const cmds: Cmd[] = useMemo(
    () => [
      ...(["about", "projects", "xp", "contact"] as const).map((id) => ({
        id,
        label: t(`menu.${id}` as "menu.about"),
        hint: "#" + id,
        icon: <span className="font-mono text-accent">#</span>,
        run: go(id),
      })),
      ...projects.map((p) => ({
        id: p.id,
        label: p.name,
        hint: "github",
        icon: <GithubIcon className="w-4 h-4" />,
        run: ext(p.repo),
      })),
      {
        id: "mail",
        label: env.EMAIL,
        hint: "e-mail",
        icon: <MailIcon className="w-4 h-4" />,
        run: () => (window.location.href = `mailto:${env.EMAIL}`),
      },
      {
        id: "in",
        label: "LinkedIn",
        hint: "link",
        icon: <LinkedinIcon className="w-4 h-4" />,
        run: ext(`https://www.linkedin.com/in/${env.LINKEDIN}`),
      },
      {
        id: "theme",
        label: t("palette.theme"),
        hint: "theme",
        icon: <Moon className="w-4 h-4" />,
        run: toggleTheme,
      },
      {
        id: "lang",
        label: t("palette.lang"),
        hint: "lang",
        icon: <Languages className="w-4 h-4" />,
        run: toggleLang,
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [t],
  );

  const list = cmds.filter((c) =>
    (c.label + c.hint).toLowerCase().includes(q.toLowerCase()),
  );

  useEffect(() => {
    if (open) {
      setQ("");
      setIdx(0);
      setTimeout(() => inputRef.current?.focus(), 20);
    }
  }, [open]);

  useEffect(() => setIdx(0), [q]);

  if (!open) return null;

  const exec = (c?: Cmd) => {
    if (!c) return;
    onClose();
    setTimeout(c.run, 50);
  };

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") onClose();
    else if (e.key === "ArrowDown") {
      e.preventDefault();
      setIdx((i) => Math.min(i + 1, list.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setIdx((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter") exec(list[idx]);
  };

  return (
    <div
      className="fixed inset-0 z-100 flex items-start justify-center pt-[12vh] px-4"
      onKeyDown={onKey}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="relative w-full max-w-lg rounded-2xl border border-line bg-bg2 shadow overflow-hidden">
        <div className="flex items-center gap-3 px-4 border-b border-line">
          <Search className="w-4 h-4 text-muted" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t("palette.placeholder")}
            className="flex-1 bg-transparent py-4 outline-none placeholder:text-muted"
          />
          <kbd className="font-mono text-xs text-muted border border-line rounded px-1.5 py-0.5">
            esc
          </kbd>
        </div>
        <ul className="max-h-[50vh] overflow-y-auto p-2">
          {list.length === 0 && (
            <li className="px-3 py-6 text-center text-muted">
              {t("palette.empty")}
            </li>
          )}
          {list.map((c, i) => (
            <li key={c.id}>
              <button
                onMouseEnter={() => setIdx(i)}
                onClick={() => exec(c)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left cursor-pointer ${i === idx ? "bg-card text-accent" : ""}`}
              >
                <span className="w-5 grid place-items-center">{c.icon}</span>
                <span className="flex-1 truncate">{c.label}</span>
                <span className="font-mono text-xs text-muted">{c.hint}</span>
                {i === idx && <CornerDownLeft className="w-3.5 h-3.5" />}
              </button>
            </li>
          ))}
        </ul>
        <p className="px-4 py-2 border-t border-line font-mono text-[11px] text-muted">
          {t("palette.hint")}
        </p>
      </div>
    </div>
  );
}

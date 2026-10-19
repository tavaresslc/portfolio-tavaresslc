import { env } from "../../config/env";
import { useLang } from "../../contexts/LangContext";
import { GithubIcon, LinkedinIcon } from "../ui/icons";

export function Footer() {
  const { t } = useLang();
  return (
    <footer className="flex flex-col sm:flex-row items-center justify-between gap-4 px-5 md:px-12 lg:px-32 py-8 border-t border-line text-sm text-muted">
      <p className="font-mono">
        © {new Date().getFullYear()} {env.NAME} · {t("footer.built")}
      </p>
      <div className="flex items-center gap-4">
        <a
          href={`https://github.com/${env.GITHUB}`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub"
          className="hover:text-accent transition-colors"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href={`https://www.linkedin.com/in/${env.LINKEDIN}`}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn"
          className="hover:text-accent transition-colors"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
      </div>
    </footer>
  );
}

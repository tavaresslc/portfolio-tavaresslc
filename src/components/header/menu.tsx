import { useLang } from "../../contexts/LangContext";
import { useActiveSection } from "../../hooks/useActiveSection";
import { Button } from "../button";

const items = [
  { id: "about", key: "menu.about" },
  { id: "projects", key: "menu.projects" },
  { id: "xp", key: "menu.xp" },
  { id: "contact", key: "menu.contact" },
] as const;

const ids = items.map((i) => i.id);

export function Menu({
  vertical = false,
  onNavigate,
}: {
  vertical?: boolean;
  onNavigate?: () => void;
}) {
  const { t } = useLang();
  const active = useActiveSection(ids as unknown as string[]);

  return (
    <nav
      aria-label="principal"
      className={`flex gap-1.5 ${vertical ? "flex-col pt-3" : "flex-row"}`}
    >
      {items.map(({ id, key }) => (
        <span key={id} onClick={onNavigate} className="contents">
          <Button
            color="transparent"
            href={`#${id}`}
            className={active === id ? "text-accent! bg-card!" : ""}
          >
            {t(key)}
          </Button>
        </span>
      ))}
    </nav>
  );
}

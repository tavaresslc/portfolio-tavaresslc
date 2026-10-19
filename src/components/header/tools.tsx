import { Button } from "../button";
import { useTheme } from "../../contexts/ThemeContext";
import { useLang } from "../../contexts/LangContext";
import { Moon, Sun } from "lucide-react";

export function Tools({ onOpenPalette }: { onOpenPalette: () => void }) {
  const { lang, toggleLang } = useLang();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      <span className="hidden sm:block">
        <Button
          color="secondary"
          chip
          onClick={onOpenPalette}
          label="Command palette"
        >
          Ctrl/⌘ + K
        </Button>
      </span>

      <Button color="secondary" onClick={toggleLang} chip label="Language">
        {lang?.toUpperCase()}
      </Button>

      <Button color="secondary" onClick={toggleTheme} chip label="Theme">
        {theme === "light" ? (
          <Moon className="w-4 h-4" />
        ) : (
          <Sun className="w-4 h-4" />
        )}
      </Button>
    </div>
  );
}

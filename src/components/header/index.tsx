import { useEffect, useState } from "react";
import { Menu as MenuIcon, X } from "lucide-react";
import { useLang } from "../../contexts/LangContext";
import { Button } from "../button";
import { Brand } from "./brand";
import { Menu } from "./menu";
import { Palette } from "./palette";
import { Tools } from "./tools";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [palette, setPalette] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setPalette((p) => !p);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-b-line bg-bg-alpha backdrop-blur-lg">
        <div className="flex items-center justify-between gap-4 py-3 px-5 md:px-12 lg:px-32">
          <Brand />
          <div className="hidden md:block">
            <Menu />
          </div>
          <div className="flex items-center gap-2">
            <Tools onOpenPalette={() => setPalette(true)} />
            <div className="md:hidden">
              <Button
                color="secondary"
                chip
                label={open ? t("nav.close") : t("nav.open")}
                onClick={() => setOpen((o) => !o)}
              >
                {open ? (
                  <X className="w-4 h-4" />
                ) : (
                  <MenuIcon className="w-4 h-4" />
                )}
              </Button>
            </div>
          </div>
        </div>
        {open && (
          <div className="md:hidden px-5 pb-4 border-t border-line">
            <Menu onNavigate={() => setOpen(false)} vertical />
          </div>
        )}
      </header>
      <Palette open={palette} onClose={() => setPalette(false)} />
    </>
  );
}

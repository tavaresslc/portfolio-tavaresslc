import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  color?: "primary" | "secondary" | "transparent";
  href?: string;
  chip?: boolean;
  external?: boolean;
  disabled?: boolean;
  className?: string;
  label?: string;
  onClick?: () => void;
};

export function Button({
  children,
  type = "button",
  color = "primary",
  href,
  chip = false,
  external = false,
  disabled = false,
  className = "",
  label,
  onClick,
}: ButtonProps) {
  let styles = "flex items-center justify-center gap-2 cursor-pointer";

  if (color === "primary") {
    styles = styles.concat(
      " bg-accent text-bg font-semibold rounded-full transition-transform duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed",
    );
  } else if (color === "secondary") {
    styles = styles.concat(
      " bg-card text-text border border-line hover:border-accent rounded-full transition-colors",
    );
  } else if (color === "transparent") {
    styles = styles.concat(
      " text-muted hover:bg-card hover:text-text rounded-full transition-colors duration-200",
    );
  }

  if (chip) {
    styles = styles.concat(
      " font-mono rounded-full px-3 py-2 text-sm font-medium transition-transform duration-200 hover:translate-y-[-1px] max-h-9",
    );
  } else {
    styles = styles.concat(" text-base py-2 px-3.5");
  }

  styles = `${styles} ${className}`;

  if (href) {
    return (
      <a
        href={href}
        className={styles}
        aria-label={label}
        {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={styles}
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
    >
      {children}
    </button>
  );
}

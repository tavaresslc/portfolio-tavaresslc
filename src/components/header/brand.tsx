export function Brand() {
  const name = import.meta.env.VITE_NAME.split(" ");

  const sigla = name
    .map((n: string, i: number) =>
      i === 0 || i === name.length - 1 ? n[0] : "",
    )
    .join("")
    .toLowerCase();

  return (
    <a className="font-mono font-semibold text-lg" href="#">
      <span className="text-accent">{sigla}</span>/
    </a>
  );
}

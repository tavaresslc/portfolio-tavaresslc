export function SectionTitle({
  kicker,
  title,
  sub,
}: {
  kicker: string;
  title: string;
  sub?: string;
}) {
  return (
    <div className="mb-12 max-w-2xl">
      <p className="font-mono text-sm text-accent mb-3">{kicker}</p>
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        {title}
        <span className="text-accent2">.</span>
      </h2>
      {sub && <p className="text-muted mt-4 text-lg">{sub}</p>}
    </div>
  );
}

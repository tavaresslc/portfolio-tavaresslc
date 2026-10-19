import type { Project } from "../../data/portfolio";

/**
 * Ilustracoes de tela (SVG/CSS) usadas quando o projeto ainda nao tem
 * screenshot/GIF real. Para usar a imagem real, defina `image` em data/portfolio.ts.
 */
function Frame({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-xl border border-line bg-bg2 overflow-hidden shadow">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-line bg-card">
        <i className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
        <i className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
        <i className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-[11px] text-muted truncate">
          {title}
        </span>
      </div>
      <div className="p-4 h-52.5 overflow-hidden">{children}</div>
    </div>
  );
}

const bar = (w: string, c = "bg-line") => (
  <div className={`h-2 rounded-full ${c}`} style={{ width: w }} />
);

export function ProjectPreview({ project }: { project: Project }) {
  if (project.image) {
    return (
      <Frame title={project.name}>
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover -m-4 max-w-none!"
          style={{ width: "calc(100% + 2rem)", height: "calc(100% + 2rem)" }}
          loading="lazy"
        />
      </Frame>
    );
  }

  switch (project.preview) {
    case "curriq":
      return (
        <Frame title="localhost:5173 / curriq">
          <div className="flex gap-3 h-full">
            <div className="w-1/3 space-y-2 border-r border-line pr-3">
              <div className="font-mono text-[11px] text-accent">login</div>
              <div className="h-6 rounded-md bg-card border border-line" />
              <div className="h-6 rounded-md bg-card border border-line" />
              <div className="h-6 rounded-md bg-accent/80" />
            </div>
            <div className="flex-1 flex flex-col gap-2 text-[11px]">
              <div className="self-end max-w-[85%] rounded-xl rounded-br-sm bg-accent2/20 border border-accent2/40 px-3 py-1.5">
                Como funciona o pgvector?
              </div>
              <div className="max-w-[90%] rounded-xl rounded-bl-sm bg-card border border-line px-3 py-1.5 space-y-1.5">
                {bar("100%")}
                {bar("80%")}
                {bar("55%")}
              </div>
              <div className="mt-auto font-mono text-accent flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                similaridade: 0.87
              </div>
            </div>
          </div>
        </Frame>
      );
    case "clima":
      return (
        <Frame title="GET /clima/belo-horizonte">
          <pre className="font-mono text-[11px] leading-relaxed text-muted">
            {`{
  `}
            <span className="text-accent">"cidade"</span>
            {`: "Belo Horizonte",
  `}
            <span className="text-accent">"temperatura"</span>
            {`: `}
            <span className="text-accent2">27.4</span>
            {`,
  `}
            <span className="text-accent">"umidade"</span>
            {`: `}
            <span className="text-accent2">48</span>
            {`,
  `}
            <span className="text-accent">"vento"</span>
            {`: `}
            <span className="text-accent2">12.1</span>
            {`,
  `}
            <span className="text-accent">"max"</span>
            {`: `}
            <span className="text-accent2">31.0</span>
            {`,
  `}
            <span className="text-accent">"min"</span>
            {`: `}
            <span className="text-accent2">19.2</span>
            {`,
  `}
            <span className="text-accent">"descricao"</span>
            {`: "Céu limpo"
}`}
          </pre>
        </Frame>
      );
    case "ml":
      return (
        <Frame title="notebook.ipynb - confusion matrix">
          <div className="flex items-center justify-center h-full gap-6">
            <div className="grid grid-cols-2 gap-1.5 font-mono text-xs">
              {[
                ["1 204", "bg-accent/80 text-bg"],
                ["32", "bg-accent/15"],
                ["41", "bg-accent/15"],
                ["1 187", "bg-accent/80 text-bg"],
              ].map(([v, c], i) => (
                <div
                  key={i}
                  className={`w-20 h-16 rounded-lg flex items-center justify-center ${c}`}
                >
                  {v}
                </div>
              ))}
            </div>
            <div className="space-y-2 font-mono text-[11px] text-muted">
              <div>MNIST · 5 vs 7</div>
              <div>TF-IDF + NB</div>
              <div className="text-accent text-lg font-bold">~93%</div>
            </div>
          </div>
        </Frame>
      );
    case "recfacil":
      return (
        <Frame title="tavaresslc.github.io/recfacil-prototipo">
          <div className="flex gap-3 h-full justify-center">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-24 rounded-xl border border-line bg-card p-2 space-y-2"
                style={{ transform: `translateY(${i === 1 ? 0 : 14}px)` }}
              >
                <div
                  className={`h-12 rounded-lg ${i === 1 ? "bg-accent/70" : "bg-accent2/40"}`}
                />
                {bar("90%")}
                {bar("60%")}
                <div className="h-5 rounded-md bg-accent/20" />
              </div>
            ))}
          </div>
        </Frame>
      );
    default:
      return (
        <Frame title="projetos-diaw / index.html">
          <pre className="font-mono text-[11px] leading-relaxed text-muted">
            <span className="text-accent2">&lt;main</span>{" "}
            <span className="text-accent">class</span>=<span>"diaw"</span>
            <span className="text-accent2">&gt;</span>
            {`
  `}
            <span className="text-accent2">&lt;h1&gt;</span>Projetos de DIAW
            <span className="text-accent2">&lt;/h1&gt;</span>
            {`
  `}
            <span className="text-accent2">&lt;section&gt;</span>
            {`
    `}
            <span className="text-muted">/* HTML · CSS · JS */</span>
            {`
  `}
            <span className="text-accent2">&lt;/section&gt;</span>
            {`
`}
            <span className="text-accent2">&lt;/main&gt;</span>
          </pre>
        </Frame>
      );
  }
}

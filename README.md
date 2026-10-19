# Portfólio - Lucas Soares Tavares

Portfólio profissional responsivo com **Sobre mim (PT/EN)**, **linha do tempo de projetos**, **experiências** e **contato** (ícones + formulário com envio por e-mail). Conteúdo baseado no perfil [github.com/tavaresslc](https://github.com/tavaresslc).

🔗 **Site publicado:** _https://SEU-PROJETO.vercel.app_

## Destaques

- Tema claro/escuro e idioma PT/EN (persistidos no `localStorage`)
- Paleta de comandos `Ctrl/⌘ + K` para navegar, abrir repositórios e alternar tema/idioma
- Hero com campo de pontos interativo (canvas) e terminal animado
- Timeline de projetos (mais antigo → mais recente) com prévia, tecnologias e link do GitHub
- Menu com seção ativa, responsivo (menu hambúrguer no mobile) e `prefers-reduced-motion`
- Formulário de contato (nome, e-mail, mensagem) enviando e-mail via [FormSubmit](https://formsubmit.co)

## Tecnologias

React 19 · TypeScript · Vite · Tailwind CSS 4 · Lucide Icons · Fontsource (Space Grotesk, JetBrains Mono) · Oxlint

## Dependências

| Pacote                                                        | Uso                      |
| ------------------------------------------------------------- | ------------------------ |
| `react`, `react-dom`                                      | UI                       |
| `tailwindcss`, `@tailwindcss/vite`                        | Estilos / tokens de tema |
| `lucide-react`                                              | Ícones                  |
| `@fontsource/space-grotesk`, `@fontsource/jetbrains-mono` | Fontes                   |
| `vite`, `@vitejs/plugin-react`                            | Build e dev server       |
| `typescript`, `@types/*`                                  | Tipagem                  |
| `oxlint`                                                    | Lint                     |

## Estrutura de diretórios

```
portfolio/
├─ public/                  # favicon e (opcional) projects/ com prints/GIFs reais
├─ src/
│  ├─ components/
│  │  ├─ header/            # brand, menu, tools, palette (Ctrl+K)
│  │  ├─ main/              # composição das seções
│  │  ├─ sections/          # hero, about, projects, experience, contact
│  │  ├─ ui/                # icons, reveal, dot-field, project-preview, section-title
│  │  ├─ footer/
│  │  └─ button.tsx
│  ├─ config/env.ts         # variáveis VITE_*
│  ├─ contexts/             # ThemeContext, LangContext
│  ├─ data/portfolio.ts     # projetos, experiências, stack (fonte do conteúdo)
│  ├─ hooks/                # useReveal, useActiveSection
│  ├─ i18n/translations.ts  # textos PT/EN
│  ├─ index.css             # tokens da paleta + animações
│  └─ main.tsx / App.tsx
├─ .env.example
├─ vercel.json
└─ vite.config.ts
```

## Rodando localmente

Pré-requisito: Node.js 20+.

```bash
git clone https://github.com/tavaresslc/portfolio.git
cd portfolio
cp .env.example .env     # ajuste os valores
npm install
npm run dev              # http://localhost:5173
npm run build            # gera dist/
npm run preview          # serve o build
```

### Variáveis de ambiente (`.env`)

| Variável                           | Descrição                                                              |
| ----------------------------------- | ------------------------------------------------------------------------ |
| `VITE_NAME`                       | Nome exibido (também gera a sigla da logo)                              |
| `VITE_EMAIL`                      | E-mail que recebe o formulário                                          |
| `VITE_GITHUB` / `VITE_LINKEDIN` | Usuários do GitHub e LinkedIn                                           |
| `VITE_WHATSAPP`                   | Número só com dígitos (ex.: `5531999999999`). Vazio = ícone oculto |

### Formulário de contato

Usa o FormSubmit, sem backend próprio. **No primeiro envio**, o FormSubmit manda um e-mail de ativação para `VITE_EMAIL`; clique no link de confirmação e os envios seguintes chegam normalmente.

## Editando o conteúdo

- **Projetos / experiências / stack:** `src/data/portfolio.ts`. Para exibir um print ou GIF real, coloque o arquivo em `public/projects/` e defina `image: "/projects/nome.gif"` no projeto; sem `image`, aparece uma ilustração da tela.
- **Textos:** `src/i18n/translations.ts`.
- **Cores:** variáveis em `src/index.css` (`--accent`, `--accent2` etc.).

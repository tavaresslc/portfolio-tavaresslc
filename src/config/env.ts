interface ImportMetaEnv {
  readonly VITE_NAME: string;
  readonly VITE_EMAIL: string;
  readonly VITE_GITHUB: string;
  readonly VITE_LINKEDIN: string;
  readonly VITE_WHATSAPP?: string;
}

declare global {
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }
}

export const env = {
  NAME: import.meta.env.VITE_NAME as string,
  EMAIL: import.meta.env.VITE_EMAIL as string,
  GITHUB: import.meta.env.VITE_GITHUB as string,
  LINKEDIN: import.meta.env.VITE_LINKEDIN as string,
  WHATSAPP: (import.meta.env.VITE_WHATSAPP as string | undefined) ?? "",
} as const;

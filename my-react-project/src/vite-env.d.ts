// file: src/vite-env.d.ts

/// <reference types="vite/client" />
/// <reference types="react" />

// types for Vite env variables: 
// (reference: https://vitejs.dev/guide/env-and-mode.html#intellisense-for-typescript)
interface ImportMetaEnv {
  readonly VITE_APP_CONFIG: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
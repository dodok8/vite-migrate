interface ImportMetaEnv {
  readonly VITE_DOMAIN: string;
  readonly PACKAGE_VERSION: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

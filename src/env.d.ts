interface ImportMetaEnv {
    readonly VITE_APPLICATION_BASE_PATH: string
    readonly VITE_GET_APPLICATION_TOKEN_PATH: string
    readonly VITE_INTEGRATION_PATH: string
    readonly VITE_INTEGRATION_AUTH_PATH: string
}
  
interface ImportMeta {
    readonly env: ImportMetaEnv
}
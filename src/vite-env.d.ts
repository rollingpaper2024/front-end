/// <reference types="vite/client" />


interface ImportMetaEnv {
    readonly VITE_APP_API_KEY: string;
    readonly VITE_APP_AUTH_DOMAIN: string;
    readonly VITE_APP_PROJECT_ID: string;
    readonly VITE_APP_STORAGE_BUCKET: string;
    readonly VITE_APP_MESSAGING_SENDER_ID: string;
    readonly VITE_APP_APP_ID: string;
    // ... 추가 환경 변수들
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
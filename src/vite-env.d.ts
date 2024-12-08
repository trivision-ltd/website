/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_EMAILJS_ENDPOINT?: string;
    readonly VITE_EMAILJS_SERVICE_ID: string;
    readonly VITE_EMAILJS_TEMPLATE_ID: string;
    readonly VITE_EMAILJS_USER_ID: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
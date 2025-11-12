// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },
    modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode'],
    css: ['~/assets/css/tailwind.css'],
    tailwindcss: {
        configPath: 'tailwind.config.ts',
        exposeConfig: false,
        viewer: false
    },
    colorMode: {
        classSuffix: '',
        preference: 'system',
        fallback: 'system',
        storageKey: 'lschafer-color-mode'
    },
    app: {
        head: {
            //titleTemplate: (title?: string) =>
            //    title ? `${title} · Léonard Schafer` : 'Léonard Schafer',
            meta: [
                { name: 'description', content: 'Portfolio website Léonard Schafer' },
                { property: 'og:title', content: 'Léonard Schafer' },
                { property: 'og:description', content: 'Exploring thoughtful interfaces, intelligent systems, and reliable engineering for ambitious teams.' },
                { property: 'og:type', content: 'website' },
                { name: 'twitter:card', content: 'summary_large_image' },
                { name: 'theme-color', content: '#0f172a' }
            ],
            htmlAttrs: {
                lang: 'en'
            }
        }
    }
})

import type { Config } from 'tailwindcss'

export default {
    darkMode: 'class',
    content: [
        './app/app.vue',
        './app/components/**/*.{vue,js,ts}',
        './app/layouts/**/*.vue',
        './app/pages/**/*.vue',
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}'
    ],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '1.5rem',
                lg: '2rem'
            }
        },
        extend: {
            colors: {
                background: 'rgb(var(--color-background) / <alpha-value>)',
                surface: 'rgb(var(--color-surface) / <alpha-value>)',
                foreground: 'rgb(var(--color-foreground) / <alpha-value>)',
                muted: 'rgb(var(--color-muted) / <alpha-value>)',
                accent: 'rgb(var(--color-accent) / <alpha-value>)',
                border: 'rgb(var(--color-border) / <alpha-value>)'
            },
            fontFamily: {
                sans: [
                    '"Space Grotesk"',
                    '"Inter"',
                    '"Sora"',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'sans-serif'
                ]
            },
            boxShadow: {
                glow: '0 25px 65px -25px rgba(14, 165, 233, 0.35)',
                card: '0 18px 35px -20px rgba(15, 23, 42, 0.35)'
            },
            animation: {
                'fade-in': 'fade-in 800ms ease forwards'
            },
            keyframes: {
                'fade-in': {
                    '0%': { opacity: '0', transform: 'translate3d(0, 12px, 0)' },
                    '100%': { opacity: '1', transform: 'translate3d(0, 0, 0)' }
                }
            }
        }
    },
    plugins: []
} satisfies Config

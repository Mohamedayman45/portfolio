import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#faf7f1',
          secondary: '#f3eee4',
          tertiary: '#ebe4d6',
        },
        foreground: {
          DEFAULT: '#1c1917',
          secondary: '#57534e',
          tertiary: '#8a8278',
        },
        primary: {
          DEFAULT: '#b8553a',
          hover: '#9c4630',
        },
        accent: {
          DEFAULT: '#b8553a',
          hover: '#9c4630',
        },
        border: {
          DEFAULT: '#e5dfd6',
          hover: '#c9bfb0',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        serif: ['var(--font-newsreader)', 'Georgia', 'serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightish: '-0.015em',
      },
      maxWidth: {
        prose: '68ch',
      },
    },
  },
  plugins: [],
}
export default config

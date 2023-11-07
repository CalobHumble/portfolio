import type { Config } from 'tailwindcss'
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    fontFamily: {
      'monospace': ['Source Code Pro', 'monospace'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'upwork': '#6FDA44',
        'prisma': '#2D3748',
        'expo': '#000020',
        'nest': '#E0234E',
        'graphql': '#E10098',
        'firebase': '#FFCA28',
        'auth0': '#EB5424',
        'sentry': '#362D59',
        'python': '#3776AB',
      }
    },
  },
  darkMode: 'class',
  plugins: [nextui({
    themes: {
      dark: {
        colors: {
          background: 'rgb(22,22,22)',
          foreground: 'rgb(244,244,240)',
        }
      }
    }
  })],
}
export default config

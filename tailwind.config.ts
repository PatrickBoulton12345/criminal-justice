import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        lfg: {
          black: '#000000',
          orange: '#FE5500',
          yellow: '#EE9944',
          blue: '#79CAC4',
          cream: '#EBE3D0',
        },
      },
      fontFamily: {
        octarine: ['Octarine', 'system-ui', 'sans-serif'],
        'octarine-light': ['Octarine-Light', 'system-ui', 'sans-serif'],
        dm: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        bump: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.18)' },
          '100%': { transform: 'scale(1)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        bump: 'bump 250ms ease-out',
        slideIn: 'slideIn 220ms ease-out',
      },
    },
  },
  plugins: [],
};

export default config;

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        void: '#070D0E',
        abyss: '#0B1618',
        tealDark: '#102226',
        amberGold: '#E89B3C',
        amberGlow: '#F6BA66',
        crimsonClade: '#E64833',
        cyanHaplotype: '#38BDF8',
        emeraldRefugia: '#34D399',
        violetHaplotype: '#A78BFA',
      }
    },
  },
  plugins: [],
}

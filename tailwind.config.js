/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nojunk: {
          dark: '#2B170B',       // Deep rich chocolate
          chocolate: '#4A2C17',  // Warm milk/dark chocolate
          brown: '#5D371E',      // Primary badge brown
          caramel: '#C88A42',    // Warm caramel gold
          gold: '#D49A58',       // Light golden accent
          amber: '#E3A857',      // Warm honey amber
          parchment: '#F5EFEB',  // Warm paper beige
          cream: '#FBF8F2',      // Pure luxury cream bg
          surface: '#FDFBF7',    // Card background
          border: '#E8DCB',     // Subtle border
          sand: '#EADBC8',       // Sand tone
          card: '#F6EFE6',       // Mobile reference card bg
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Caveat"', '"Dancing Script"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(61, 35, 20, 0.08)',
        'card': '0 6px 24px -4px rgba(61, 35, 20, 0.12)',
        'hover': '0 12px 32px -4px rgba(61, 35, 20, 0.18)',
        'glow': '0 0 25px rgba(200, 138, 66, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}

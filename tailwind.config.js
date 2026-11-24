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
          dark: '#231207',       // Deep roasted dark espresso / dark chocolate
          chocolate: '#381C0B',  // Rich warm chocolate
          brown: '#4E2911',      // Medium warm cocoa brown
          walnut: '#683B19',     // Walnut tone
          caramel: '#C27C24',    // Warm glowing caramel
          gold: '#DCA249',       // Bright polished gold
          amber: '#EBB969',      // Radiant golden amber
          goldenBrown: '#8B4E1A', // Rich golden brown
          lightBrown: '#C59567',  // Soft golden light brown
          cream: '#F7F1E7',      // Luxury golden cream
          parchment: '#EFE5D5',  // Warm golden parchment
          surface: '#FCF8F2',    // Clean card surface
          card: '#F6EDE0',       // Card background
          border: '#DFCBB2',     // Subtle golden border
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        script: ['"Caveat"', '"Dancing Script"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(56, 28, 11, 0.08)',
        'card': '0 8px 30px -4px rgba(56, 28, 11, 0.12)',
        'hover': '0 16px 40px -6px rgba(56, 28, 11, 0.22)',
        'gold-glow': '0 0 35px rgba(220, 162, 73, 0.45)',
        'amber-glow': '0 0 25px rgba(194, 124, 36, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3.5s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-7px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}

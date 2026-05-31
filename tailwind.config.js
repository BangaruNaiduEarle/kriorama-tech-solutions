/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#020617',
          900: '#0F172A',
          800: '#1E293B',
        },
        brand: {
          violet: '#6D28D9',
          purple: '#A855F7',
          pink: '#EC4899',
          rose: '#FB7185',
          orange: '#F97316',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'aurora': 'aurora 18s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'spin-slow': 'spin 40s linear infinite',
        'spin-slower': 'spin 80s linear infinite',
        'spin-reverse': 'spin-reverse 60s linear infinite',
      },
      keyframes: {
        aurora: {
          '0%,100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '50%': { transform: 'translate3d(2%,-3%,0) scale(1.1)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'spin-reverse': {
          from: { transform: 'rotate(360deg)' },
          to: { transform: 'rotate(0deg)' },
        },
      },
    },
  },
  plugins: [],
};

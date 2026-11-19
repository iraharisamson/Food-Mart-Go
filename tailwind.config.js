/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-in-from-bottom-2': {
          '0%': { transform: 'translateY(0.5rem)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.2s ease-out',
        'slide-in-from-bottom-2': 'slide-in-from-bottom-2 0.2s ease-out',
        'toast-in': 'toast-in 0.25s ease-out',
        'drawer-in': 'drawer-in 0.25s ease-out',
      },
      keyframes: {
        'toast-in': {
          '0%': { opacity: '0', transform: 'translateY(0.75rem) scale(0.97)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        'drawer-in': {
          '0%': { transform: 'translateX(1.5rem)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

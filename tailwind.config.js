/** @type {import('tailwindcss').Config} */
import animate from 'tailwindcss-animated';
import radix_tailwind from 'tailwindcss-radix';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        marble: {
          50: '#F8FAFC',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
        },
      },
      backgroundImage: {
        // btn_loading: 'url(./public/icons/loading-circle-white.png)',
      },
      animation: {
        'spin-slow': 'spin 1s linear infinite',
      },
    },
  },
  plugins: [animate, radix_tailwind],
  darkMode: ['class'],
};

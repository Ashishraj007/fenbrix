/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0B2436',
          900: '#071A28',
          800: '#0B2436',
          700: '#103A4E',
          600: '#12586A',
        },
        teal: {
          DEFAULT: '#1B8F8A',
          600: '#1B8F8A',
          500: '#23AFA3',
          400: '#35D6C0',
        },
        mist: '#F7FAFA',
        line: '#E4EBEA',
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1180px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.7' },
          '70%': { transform: 'scale(1.35)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        'gradient-pan': {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up .7s cubic-bezier(.22,1,.36,1) both',
        float: 'float 6s ease-in-out infinite',
        marquee: 'marquee 38s linear infinite',
        'pulse-ring': 'pulse-ring 2.6s cubic-bezier(.24,.8,.36,1) infinite',
        'gradient-pan': 'gradient-pan 12s ease infinite',
      },
      transitionDuration: {
        400: '400ms',
      },
      boxShadow: {
        soft: '0 2px 10px rgba(11,36,54,.05), 0 12px 40px rgba(11,36,54,.06)',
        lift: '0 8px 24px rgba(11,36,54,.09), 0 28px 60px rgba(11,36,54,.10)',
      },
    },
  },
  plugins: [],
};

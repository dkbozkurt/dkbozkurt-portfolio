/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
        // Entrance animations for above-the-fold content. They used to be
        // framer-motion `initial`/`animate` props, which render the element
        // at `opacity: 0` in the server HTML and only reveal it once the JS
        // bundle has downloaded and hydrated. As CSS they play on first paint.
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'pop-in': {
          from: { opacity: '0', transform: 'scale(0)' },
          to: { opacity: '1', transform: 'scale(1)' },
        },
        'rise-in': {
          '0%': { opacity: '0', transform: 'translateY(100px)' },
          '40%': { opacity: '1' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'drop-in': {
          '0%': { opacity: '0', transform: 'translateY(-100px)' },
          '40%': { opacity: '1' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        // Same, for the header bar, which is centred with translateX(-50%).
        'drop-in-centered': {
          '0%': { opacity: '0', transform: 'translate(-50%, -100px)' },
          '40%': { opacity: '1' },
          '100%': { opacity: '1', transform: 'translate(-50%, 0)' },
        },
        'slide-in-left': {
          '0%': { opacity: '0', transform: 'translateX(-100px)' },
          '40%': { opacity: '1' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      animation: {
        shimmer: 'shimmer 1.6s infinite',
        'fade-in': 'fade-in 0.4s ease-out both',
        'pop-in': 'pop-in 0.2s ease-out both',
        // Slight overshoot to keep the feel of framer-motion's default spring.
        'rise-in': 'rise-in 0.6s cubic-bezier(0.34, 1.25, 0.64, 1) both',
        'drop-in': 'drop-in 0.6s cubic-bezier(0.34, 1.25, 0.64, 1) both',
        'drop-in-centered': 'drop-in-centered 0.6s cubic-bezier(0.34, 1.25, 0.64, 1) both',
        'slide-in-left': 'slide-in-left 0.6s cubic-bezier(0.34, 1.25, 0.64, 1) 0.2s both',
      },
    },
  },
  plugins: [],
  darkMode: "class",
}

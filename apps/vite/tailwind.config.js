import base from 'tailwind-config/tailwind.config.js';

/** @type {import('tailwindcss').Config} */
export default {
  ...base,
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
};

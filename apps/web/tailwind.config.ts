import base from 'tailwind-config/tailwind.config.js';

import type { Config } from 'tailwindcss';

const config: Config = {
  ...base,
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './tmp.js',
  ],
};

// satisfies was throwing a type error so had to explicity type the object

export default config;

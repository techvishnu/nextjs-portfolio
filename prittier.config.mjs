/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').options} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  trailingComma: 'all',
  semi: true,
  tabWidth: 2,
  singleQuote: true,
  jsxSingleQuote: true,
};

export default config;

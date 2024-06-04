import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-light': '#f5f5f5', // Fundo branco acinzentado muito claro
        'title-dark': '#333333',       // Títulos cinza escuro
        'subtitle-grayblue': '#7b8da4', // Subtítulos azul acinzentado
        'text-lightblack': '#444444',  // Textos e labels pretos claros
      },
      fontFamily: {
        'sans': ['Helvetica Neue', 'Arial', 'sans-serif'], // Fonte fina e moderna
      },
    },
  },
  plugins: [],
};
export default config;

import type { Config } from "tailwindcss"

const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", 
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      ringColor: ['aria-invalid'],
      borderColor: ['aria-invalid'],
      ringWidth: ['aria-invalid'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} satisfies Config

export default config

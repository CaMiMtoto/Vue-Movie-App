/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#191A1F',
                'secondary': '#545A6C',
                'accent': '#D22F27',
            }
        },
    },
    plugins: [],
}
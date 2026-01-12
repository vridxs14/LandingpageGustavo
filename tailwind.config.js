/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
        "./*.{js,ts,jsx,tsx}", // Catch files in root like App.tsx if any
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Oswald', 'sans-serif'],
            },
            colors: {
                brand: {
                    purple: '#b026ff', // neon purple
                    dark: '#09090b', // zinc-950
                    gray: '#27272a', // zinc-800
                }
            }
        },
    },
    plugins: [],
}

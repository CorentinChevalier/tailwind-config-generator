/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            inter: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        },
        colors: {
            white: '#ffffff',
            black: '#000000',
        },
        extend: {
            screens: {
                xs: '320px',
            },
        },
    },
    plugins: [],
}

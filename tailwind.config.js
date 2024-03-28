/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
    theme: {
        fontFamily: {
            inter: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        },
        colors: {
            transparent: 'transparent',
            white: '#ffffff',
            'ghost-white': '#E8E9F3',
            'non-photo-blue': '#B1E5F2',
            'medium-slate-blue': '#715AFF',
            'raisin-black': '#272635',
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

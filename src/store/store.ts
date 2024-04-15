import { writable } from 'svelte/store'

export interface ConfigType {
    header: string
    defaultExportBeginning: string
    content: Array<string>
    defaultExportEnd: string
    colors: Array<{ colorName: string; colorValue: string }>
}

// Tailwind Config file object store
export const tailwindConfig = writable<ConfigType>({
    header: "/** @type {import('tailwindcss').Config} */",
    defaultExportBeginning: 'export default {',
    content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
    colors: [
        {
            colorName: 'black',
            colorValue: '#000000',
        },
        {
            colorName: 'white',
            colorValue: '#ffffff',
        },
    ],
    defaultExportEnd: '}',
})

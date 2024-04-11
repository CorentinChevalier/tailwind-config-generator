import { writable } from 'svelte/store'

export interface ConfigType {
    header: string
    defaultExportBeginning: string
    content: Array<string>
    defaultExportEnd: string
    colors: { [key: string]: string }
}

// Tailwind Config file object store
export const tailwindConfig = writable<ConfigType>({
    header: "/** @type {import('tailwindcss').Config} */",
    defaultExportBeginning: 'export default {',
    content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
    colors: {
        black: '#000000',
        white: '#ffffff',
    },
    defaultExportEnd: '}',
})

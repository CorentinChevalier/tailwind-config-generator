import { writable } from 'svelte/store'

export enum Extendables {
    COLORS = 'colors',
}

export interface ConfigType {
    extend: Array<{ field: Extendables; value: boolean }>
    content: Array<string>
    colors: Array<{ colorName: string; colorValue: string }>
}

// Tailwind Config file object store
export const tailwindConfig = writable<ConfigType>({
    content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
    extend: [
        {
            field: Extendables.COLORS,
            value: false,
        },
    ],
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
})

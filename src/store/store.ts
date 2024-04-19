import { writable } from 'svelte/store'

export enum Extendables {
    COLORS = 'colors',
    SCREENS = 'screens',
}

export interface ConfigType {
    extend: Array<{ field: Extendables; value: boolean }>
    content: Array<string>
    colors: Array<{ colorName: string; colorValue: string }>
    screens: Array<{ breakpointName: string; breakpointValue: string }>
}

// Tailwind Config file object store
export const tailwindConfig = writable<ConfigType>({
    content: ['./index.html', './src/**/*.{svelte,js,ts,jsx,tsx}'],
    extend: [
        {
            field: Extendables.COLORS,
            value: false,
        },
        {
            field: Extendables.SCREENS,
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
    screens: [
        {
            breakpointName: 'mobile-s',
            breakpointValue: '320px',
        },
        {
            breakpointName: 'mobile-m',
            breakpointValue: '640px',
        },
        {
            breakpointName: 'mobile-l',
            breakpointValue: '425px',
        },
        {
            breakpointName: 'tablet',
            breakpointValue: '768px',
        },
        {
            breakpointName: 'pc',
            breakpointValue: '1024px',
        },
        {
            breakpointName: 'hd',
            breakpointValue: '1280px',
        },
        {
            breakpointName: 'fullhd',
            breakpointValue: '1920px',
        },
        {
            breakpointName: '2k',
            breakpointValue: '1440px',
        },
        {
            breakpointName: '4k',
            breakpointValue: '2560px',
        },
    ],
})

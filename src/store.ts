import { readable, readonly, writable } from 'svelte/store'

export const header = readonly(
    readable("/** @type {import('tailwindcss').Config} */")
)
export const content = writable([
    './index.html',
    './src/**/*.{svelte,js,ts,jsx,tsx}',
])

export function setContent(content_: string[]): void {
    content.set(content_)
}
export function updateContent(callback: CallableFunction): void {
    callback()
}

content.subscribe((value) => {
    console.log(value)
})

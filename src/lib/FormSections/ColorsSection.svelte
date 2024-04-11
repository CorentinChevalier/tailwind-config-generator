<script lang='ts'>
    import { tailwindConfig } from "../../store/store"
    import Section from "./common/Section.svelte"
    import ColorInput from "./components/ColorInput.svelte"

    function addColor(colorName: string, colorValue: string) {
        tailwindConfig.update((config) => ({
            ...config,
            colors: { ...config.colors, ...{ [colorName]: colorValue } },
        }))
    }

    function handleUpdateColorName(event: CustomEvent) {
        console.log(event.detail)
        tailwindConfig.update((config) => {
            config.colors = { ...config.colors, [event.detail.name]: config.colors[event.detail.currentName]}
            delete config.colors[event.detail.currentName]

            return config
        })
    }

    function handleUpdateColorValue(event: CustomEvent) {
        tailwindConfig.update((config) => {
            config.colors[event.detail.currentName] = event.detail.value
            return config
        })
    }

    function handleDeleteColor(event: CustomEvent) {
        tailwindConfig.update((config) => {
            delete config.colors[event.detail.currentName]
            return config
        })
    }
</script>

<Section>
    <div slot='header' class='flex flex-row justify-between mb-6'>
        <h2>Colors</h2>
        <button type='button' on:click={() => {
            addColor((Object.keys($tailwindConfig.colors).length + 1).toString(), '#000000')} }>Add a color</button>
    </div>
    <div slot='content'>
        {#each Object.entries($tailwindConfig.colors) as [currentColorName, currentColorValue]}
            <ColorInput currentName={currentColorName} currentValue={currentColorValue} on:updateName={handleUpdateColorName} on:updateValue={handleUpdateColorValue} on:delete={handleDeleteColor} />
        {/each}
    </div>
</Section>
<script lang='ts'>
    import { Extendables, tailwindConfig } from "../../store/store"
    import { handleToggleExtend } from "../../utils/toggle-extend.utils"
    import Section from "./common/Section.svelte"
    import SectionHeader from "./common/SectionHeader.svelte"
    import ColorInput from "./components/ColorInput.svelte"

    function addColor() {
        tailwindConfig.update((config) => ({
            ...config,
            colors: [ ...config.colors, { colorName: '', colorValue: '' }],
        }))
    }

    function handleUpdate(event: CustomEvent) {
        tailwindConfig.update((config) => {
            config.colors[event.detail.index].colorName = event.detail.name
            config.colors[event.detail.index].colorValue = event.detail.value

            return config
        })
    }

    function handleDelete(event: CustomEvent) {
        tailwindConfig.update((config) => {
            config.colors.splice(event.detail.index, 1)
            return config
        })
    }
</script>

<Section>
    <div slot='header'>
        <SectionHeader 
            title='Colors' 
            description='You can define here the different colors for your tailwindcss theme, you can replace or extend the base tailwind theming with your theme.' 
            hasExtendOption 
            extendableField={Extendables.COLORS} 
            addButtonTitle='Add a color' 
            addElement={addColor} />
    </div>
    <div slot='content'>
        {#each $tailwindConfig.colors as color, index (index)}
            <ColorInput currentName={color.colorName} currentValue={color.colorValue} index={index} on:update={handleUpdate} on:delete={handleDelete} />
        {/each}
    </div>
</Section>
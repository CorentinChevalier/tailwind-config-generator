<script lang='ts'>
    import { Extendables, tailwindConfig } from "../../store/store"
    import { handleToggleExtend } from "../../utils/toggle-extend.utils"
    import Section from "./common/Section.svelte"
    import SectionHeader from "./common/SectionHeader.svelte"
    import ColorInput from "./components/ColorInput.svelte"

    function addColor(colorName: string, colorValue: string) {
        tailwindConfig.update((config) => ({
            ...config,
            colors: [ ...config.colors, { colorName: colorName, colorValue: colorValue } ],
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
        <SectionHeader title='Colors' hasExtendOption extendableField={Extendables.COLORS} addButtonTitle='Add a color' addElement={() => { addColor('color' + (Object.keys($tailwindConfig.colors).length + 1).toString(), '#ffffff')}} />
    </div>
    <div slot='content'>
        {#each $tailwindConfig.colors as color, index (index)}
            <ColorInput currentName={color.colorName} currentValue={color.colorValue} index={index} on:update={handleUpdate} on:delete={handleDelete} />
        {/each}
    </div>
</Section>
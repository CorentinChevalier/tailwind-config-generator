<script lang='ts'>
    import { Extendables, tailwindConfig } from "../../store/store"
    import Section from "./common/Section.svelte"
    import SectionHeader from "./common/SectionHeader.svelte"
    import SpacingInput from "./components/SpacingInput.svelte"

    function addSpacing() {
        tailwindConfig.update((config) => ({...config, spacing: [...config.spacing, { spacingName: '', spacingValue: ''}]}))
    }

    function handleUpdate(event: CustomEvent) {
        tailwindConfig.update((config) => {
            config.spacing[event.detail.index].spacingName = event.detail.name
            config.spacing[event.detail.index].spacingValue = event.detail.value

            return config
        })
    }

    function handleDelete(event: CustomEvent) {
        tailwindConfig.update((config) => {
            config.spacing.splice(event.detail.index, 1)
            return config
        })
    }
</script>

<Section>
    <div slot='header'>
        <SectionHeader 
            title='Spacing'
            description='You can define here the spacing values for your classes or extend the base configuration from tailwind.'
            hasExtendOption 
            extendableField={Extendables.SPACING} 
            addButtonTitle='Add a spacing' 
            addElement={addSpacing} 
        />   
    </div>
    <div slot='content'>
        {#each $tailwindConfig.spacing as spacing, index}
            <SpacingInput name={spacing.spacingName} value={spacing.spacingValue} index={index} on:update={handleUpdate} on:delete={handleDelete} />
        {/each}
    </div>
</Section>
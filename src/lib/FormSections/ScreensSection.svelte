<script lang='ts'>
    import { Extendables, tailwindConfig } from "../../store/store"
    import Section from "./common/Section.svelte"
    import SectionHeader from "./common/SectionHeader.svelte"
    import ScreenInput from "./components/ScreenInput.svelte"

    function addBreakpoint() {
        tailwindConfig.update((config) => ({...config, screens: [...config.screens, { breakpointName: '', breakpointValue: ''}]}))
    }

    function handleUpdate(event: CustomEvent) {
        tailwindConfig.update((config) => {
            config.screens[event.detail.index].breakpointName = event.detail.name
            config.screens[event.detail.index].breakpointValue = event.detail.value

            return config
        })
    }

    function handleDelete(event: CustomEvent) {
        tailwindConfig.update((config) => {
            config.screens.splice(event.detail.index, 1)
            return config
        })
    }

</script>

<Section>
    <div slot='header'>
        <SectionHeader 
            title='Screen breakpoints'
            description='You can define here your screen breakpoints for responsiveness or extend the base breakpoints from tailwind.'
            hasExtendOption extendableField={Extendables.SCREENS} 
            extended={$tailwindConfig.extend[$tailwindConfig.extend.findIndex(((extend) => extend.field === Extendables.SCREENS))].value} 
            addButtonTitle='Add a breakpoint' 
            addElement={addBreakpoint} />
    </div>
    <div slot='content'>
        {#each $tailwindConfig.screens as breakpoint, index}
            <ScreenInput name={breakpoint.breakpointName} value={breakpoint.breakpointValue} index={index} on:update={handleUpdate} on:delete={handleDelete} />
        {/each}
    </div>
</Section>
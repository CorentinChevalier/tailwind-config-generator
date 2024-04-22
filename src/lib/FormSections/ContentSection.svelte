<script lang='ts'>
    import { tailwindConfig } from "../../store/store"
    import Section from "./common/Section.svelte"
    import SectionHeader from "./common/SectionHeader.svelte"
    import ContentInput from "./components/ContentInput.svelte"

    const addPath = () => {
        $tailwindConfig.content = [...$tailwindConfig.content, '']
    }

    const handleUpdate = (event: CustomEvent) => {
        $tailwindConfig.content[event.detail.index] = event.detail.value
    }

    const handleDelete = (event: CustomEvent) => {
        $tailwindConfig.content.splice(event.detail.index, 1);
        $tailwindConfig.content = $tailwindConfig.content
    }
</script>

<Section>
    <div slot='header'>
        <SectionHeader title='Content' description='You can define here the paths of files where the tailwind config should apply.' addButtonTitle='Add a path' addElement={addPath} />
    </div>
    <div slot='content'>
        {#each $tailwindConfig.content as path, index}
            <ContentInput path={path} index={index} on:update={handleUpdate} on:delete={handleDelete} />
        {/each}
    </div>
</Section>
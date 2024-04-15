<script lang='ts'>
    import { tailwindConfig } from "../../store/store"
    import Section from "./common/Section.svelte"
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
    <div slot='header' class='flex flex-row justify-between'>
        <h2>Content</h2>
        <button type='button' on:click={addPath}>Add a path</button>
    </div>
    <div slot='content'>
        {#each $tailwindConfig.content as path, index}
            <ContentInput path={path} index={index} on:update={handleUpdate} on:delete={handleDelete} />
        {/each}
    </div>
</Section>
<script lang='ts'>
    import { tailwindConfig } from "../../store/store"
    import Section from "./common/Section.svelte"

    const addPath = () => {
        $tailwindConfig.content = [...$tailwindConfig.content, '']
    }

    const deletePath = (index: number) => {
        $tailwindConfig.content.splice(index, 1);
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
            <div class='flex flex-row justify-between'>
                <input class='w-full' type='text' bind:value={$tailwindConfig.content[index]} placeholder='type your path here' />
                <button type='button' class='!bg-red-500' on:click={() => deletePath(index)}>Delete</button>
            </div>
        {/each}
    </div>
</Section>
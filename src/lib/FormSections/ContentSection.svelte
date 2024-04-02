<script lang='ts'>
    import { content } from "../../store";
</script>

<div class='flex flex-col w-full gap-2'>
    <h2>Content Section</h2>
    {#each $content as $path}
        <input type='text' value={$path} />
    {/each}
</div>
<script lang='ts'>
    import { createEventDispatcher } from "svelte"

    const dispatch = createEventDispatcher()

    //props
    export let path: string
    export let index: number

    //custom events
    function handleUpdate(index: number, value: string) {
        dispatch('update', {
            index,
            value,
        })
    }

    function handleDelete(index: number) {
        dispatch('delete', {
            index,
        })
    }
</script>

<div class='flex flex-row justify-between'>
    <input class='w-full' type='text' bind:value={path} placeholder='type your path here' on:input={(e) => handleUpdate(index, e.currentTarget.value)} />
    <button type='button' class='!bg-red-500' on:click={() => handleDelete(index)}>Delete</button>
</div>
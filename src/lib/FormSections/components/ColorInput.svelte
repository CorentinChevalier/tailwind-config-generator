<script lang='ts'>
    import { createEventDispatcher } from "svelte"
    const dispatch = createEventDispatcher()

    //props
    export let currentName: string
    export let currentValue: string
    export let index: number

    //custom events
    function handleUpdate(name: string, value: string, index: number) {
        dispatch('update', {
            name,
            value,
            index,
        })
    }

    function handleDelete(index: number) {
        dispatch('delete', {
            index
        })
    }
</script>

<div class='flex flex-row items-center gap-4'>
    <input type='text' bind:value={currentName} class='w-full' on:input={(e) => handleUpdate(e.currentTarget.value, currentValue, index)} />
    <input type='color' bind:value={currentValue} on:input={(e) => handleUpdate(currentName, e.currentTarget.value, index)} />
    <button type='button' class='!bg-red-500' on:click={() => handleDelete(index)}>Delete</button>
</div>
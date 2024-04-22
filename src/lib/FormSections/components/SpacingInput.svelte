<script lang='ts'>
    import { createEventDispatcher } from "svelte"

    //props
    export let index: number
    export let name: string
    export let value: string

    const dispatch = createEventDispatcher()

    //custom events
    function handleUpdate (name: string, value: string, index: number) {
        dispatch('update', {
            name,
            value,
            index
        })
    }

    function handleDelete (index: number) {
        dispatch('delete', {
            index
        })
    }
</script>

<div class='flex flex-row gap-2'>
    <input class='flex-1' type='text' bind:value={name} on:input={(e) => handleUpdate(e.currentTarget.value, value, index)} placeholder="type your custom spacing name" />
    <input class='flex-1' type='text' bind:value={value} on:input={(e) => handleUpdate(name, e.currentTarget.value, index)} placeholder="type your spacing value" />
    <button type='button' class='!bg-red' on:click={() => { handleDelete(index) }}>Delete</button>
</div>
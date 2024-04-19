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

<div class='flex flex-row items-center my-2 gap-4'>
    <div class='flex flex-1 flex-row items-center border rounded-lg gap-2'>
        <input type='text' bind:value={currentName} class='w-full !m-0 !border-none' on:input={(e) => handleUpdate(e.currentTarget.value, currentValue, index)} />
        <input type='color' bind:value={currentValue} on:input={(e) => handleUpdate(currentName, e.currentTarget.value, index)} />
    </div>
    <button type='button' class='!bg-red' on:click={() => handleDelete(index)}>Delete</button>
</div>
<script lang='ts'>
    import { createEventDispatcher } from "svelte"
    const dispatch = createEventDispatcher()

    //props
    export let currentName: string
    export let currentValue: string

    //custom events
    function handleUpdateColorName(name: string, currentName: string, currentValue: string ) {
        dispatch('updateName', {
            name,
            currentName,
            currentValue,
        })
    }

    function handleUpdateColorValue(value: string, currentName: string) {
        dispatch('updateValue', {
            currentName,
            value,
        })
    }

    function handleDelete(currentName: string) {
        dispatch('delete', {
            name
        })
    }
</script>

<div class='flex flex-row items-center gap-4'>
    <input type='text' bind:value={currentName} class='w-full' on:input={(e) => handleUpdateColorName(e.currentTarget.value, currentName, currentValue)} />
    <input type='color' bind:value={currentValue} on:input={(e) => handleUpdateColorValue(e.currentTarget.value, currentName)} />
    <button type='button' class='!bg-red-500' on:click={() => handleDelete(currentName)}>Delete</button>
</div>
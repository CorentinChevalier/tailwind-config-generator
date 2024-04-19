<script lang='ts'>
    import { Extendables } from "../../../store/store"
    import { handleToggleExtend } from "../../../utils/toggle-extend.utils"

    //props
    export let title: string
    export let hasExtendOption: boolean = false
    export let extendableField: Extendables = Extendables.COLORS
    export let addButtonTitle: string
    export let addElement: (args: any) => void
</script>

<div class='flex flex-row justify-between mb-6'>
    <h2>{title}</h2>
    <div class='flex flex-row gap-4 items-center'>
        {#if hasExtendOption && extendableField}
        <label class='extend-label'>
            <span>Extend with base Tailwind theming</span>
            <input type='checkbox' on:change={(e) => handleToggleExtend(extendableField, e.currentTarget.checked)} />
        </label>
        {/if}
        <button type='button' on:click={addElement}>{addButtonTitle}</button>
    </div>
</div>


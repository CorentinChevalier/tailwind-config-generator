<script lang="ts">
    import { tailwindConfig } from "../store/store"
    import { renderConfig } from "../utils/config-reader.utils"
</script>

<div class='w-full flex flex-col p-2 bg-raisin-black rounded-xl max-w-[700px]'>
    <p class='flex flex-row justify-between w-full px-2 py-4 text-non-photo-blue font-medium border-b'>
        <span>tailwind.config.js</span>
        <i class="ri-file-copy-line text-lg"></i>
    </p>
    <pre class='flex flex-1 flex-col overflow-auto  text-white p-8'>{renderConfig($tailwindConfig)}</pre>
</div>
<script lang="ts">
    import { content, header } from '../store'
</script>

<div class='w-[700px] flex flex-col p-2 bg-raisin-black rounded-xl'>
    <p class='flex flex-row justify-between w-full px-2 py-4 text-non-photo-blue font-medium border-b'>
        <span>tailwind.config.js</span>
        <i class="ri-file-copy-line text-lg"></i>
    </p>
    <code class='flex flex-1 overflow-y-auto overflow-x-hidden  text-white p-8'>
        {$header}
        '{$content}'
    </code>
</div>
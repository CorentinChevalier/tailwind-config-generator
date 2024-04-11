<script lang="ts">
    import Code from './lib/Code.svelte'
    import Footer from './lib/Footer.svelte'
    import Form from './lib/Form.svelte'
    import Header from './lib/Header.svelte'
</script>

<svelte:head>
    <title>Tailwind Config Generator</title>
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"
    rel="stylesheet"
    />
</svelte:head>

<Header />
<main class='w-full flex flex-row flex-1 justify-start gap-8 p-10'>
    <div class='flex flex-2'>
        <Form />
    </div>
    <div class='flex flex-2 justify-end'>
        <Code />
    </div>
</main>
<Footer />

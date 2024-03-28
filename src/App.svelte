<script lang="ts">
    import svelteLogo from './assets/svelte.svg'
    import Footer from './lib/Footer.svelte'
    import Header from './lib/Header.svelte'
    import viteLogo from '/vite.svg'
</script>

<svelte:head>
    <title>Tailwind Config Generator</title>
    <link
    href="https://cdn.jsdelivr.net/npm/remixicon@4.1.0/fonts/remixicon.css"
    rel="stylesheet"
    />
</svelte:head>

<Header />
<main class='flex flex-col justify-center items-center w-[600px] gap-4'>
    <div class='flex flex-row justify-center'>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} class="logo" alt="Vite Logo" />
          </a>
          <a href="https://svelte.dev" target="_blank" rel="noreferrer">
            <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
          </a>
    </div>
    <h1>Vite + Svelte</h1>
</main>
<Footer />

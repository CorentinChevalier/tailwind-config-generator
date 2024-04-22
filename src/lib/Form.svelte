<script lang='ts'>
    import ColorsSection from "./FormSections/ColorsSection.svelte"
    import ContentSection from "./FormSections/ContentSection.svelte"
    import ScreensSection from "./FormSections/ScreensSection.svelte"
    import SpacingSection from "./FormSections/SpacingSection.svelte"

</script>

<form class="flex flex-col w-full gap-8">
    <ContentSection />
    <ColorsSection />
    <ScreensSection />
    <SpacingSection />
</form>
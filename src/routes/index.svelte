<script context="module" lang="ts">
    import BodyContainer from "$lib/components/body/BodyContainer.svelte";
    import SelectExport from "$lib/components/body/home/SelectExport.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
    import NavigationBar from "$lib/components/head/NavigationBar.svelte";
    import ExportClass from "$lib/components/body/home/ExportClass";
    import JSON from "$lib/assets/img/json.png";
    import DOCX from "$lib/assets/img/docx.png";
    import DropZone from "$lib/components/body/home/DropZone.svelte";
	export const prerender = true;
</script>
<script>
    $: showDropZone = false;
    $: option = "NONE";
    $: isIntegration = false;
</script>

<svelte:head>
	<title>Robo's Kindle Clipping</title>
	<meta name="description" content="Format your 'My Clippings' file with ease" />
</svelte:head>

<section>
	<NavigationBar page="home" />
    <BodyContainer>
        {#if showDropZone}
            <DropZone bind:option bind:isIntegration />
        {:else}
            <SelectExport exports={[
                new ExportClass("https://cdn.worldvectorlogo.com/logos/notion-2.svg", "Notion", true),
                new ExportClass(JSON, "JSON", false),
                new ExportClass(DOCX, "DOCX", false)
                ]} bind:showDropZone bind:option bind:isIntegration/>
        {/if}
        <!-- <DropZone /> -->
    </BodyContainer>
    <Footer />
</section>
<style>
    /* INDEX */
    section{
        height: 100%;
        overflow: hidden;
        background-color: var(--color-bg-snow);
    }
</style>

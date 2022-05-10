<script context="module" lang="ts">
    import BodyContainer from "$lib/components/body/BodyContainer.svelte";
    import DropZone from "$lib/components/body/DropZone.svelte";
    import Export from "$lib/components/body/Export.svelte";
    import SelectExport from "$lib/components/body/SelectExport.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
    import NavigationBar from "$lib/components/head/NavigationBar.svelte";
    import ExportClass from "$lib/components/body/ExportClass";
	export const prerender = true;
</script>

<svelte:head>
	<title>Robo's Kindle Clipping</title>
	<meta name="description" content="Format your 'My Clippings' file with ease" />
</svelte:head>

<section>
	<NavigationBar page="home" />
    <BodyContainer>
        <SelectExport exports={[
            new ExportClass("https://cdn.worldvectorlogo.com/logos/notion-2.svg", "Notion"),
            new ExportClass("img/json.png", "JSON"),
            new ExportClass("img/docx.png", "DOCX")
            ]} />
        <!-- <DropZone /> -->
    </BodyContainer>
    <Footer />
</section>
<style>
    /* INDEX */
    section{
        height: 100%;
        overflow: hidden;
    }
</style>

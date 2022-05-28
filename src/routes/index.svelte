<script context="module" lang="ts">
    import BodyContainer from "$lib/components/body/BodyContainer.svelte";
    import SelectExport from "$lib/components/body/home/SelectExport.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
    import NavigationBar from "$lib/components/head/NavigationBar.svelte";
    import ExportClass from "$lib/components/body/home/ExportClass";
    import JSON from "$lib/assets/img/json.png";
    import DOCX from "$lib/assets/img/docx.png";
	export const prerender = true;
    console.log(process.env["VITE_APPLICATION_BASE_PATH"])
</script>

<svelte:head>
	<title>Robo's Kindle Clipping</title>
	<meta name="description" content="Format your 'My Clippings' file with ease" />
</svelte:head>

<section>
	<NavigationBar page="home" />
    <BodyContainer>
        <SelectExport exports={[
            new ExportClass("https://cdn.worldvectorlogo.com/logos/notion-2.svg", "Notion", true),
            new ExportClass(JSON, "JSON", false),
            new ExportClass(DOCX, "DOCX", false)
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
        background-color: var(--color-bg-snow);
    }
</style>

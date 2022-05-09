<script context="module" lang="ts">
import BodyContainer from "$lib/components/body/BodyContainer.svelte";

    import DropZone from "$lib/components/body/DropZone.svelte";
import Footer from "$lib/components/footer/Footer.svelte";
import NavigationBar from "$lib/components/head/NavigationBar.svelte";
	export const prerender = true;
</script>

<svelte:head>
	<title>Robo's Kindle Clipping</title>
	<meta name="description" content="Format your 'My Clippings' file with ease" />
</svelte:head>

<section>
	<NavigationBar page="home" />
    <BodyContainer>
        <DropZone />
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

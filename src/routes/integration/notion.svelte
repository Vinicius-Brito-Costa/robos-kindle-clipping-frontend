<script context="module" lang="ts">
	export function load(objr: any) {
		return {
			props: {
				url: objr.url
			}
		};
	}
	import BodyContainer from '$lib/components/body/BodyContainer.svelte';
	import Footer from '$lib/components/footer/Footer.svelte';
	import NavigationBar from '$lib/components/head/NavigationBar.svelte';
	export const prerender = false;
</script>

<script lang="ts">
	import DropZone from '$lib/components/body/home/DropZone.svelte';

	export let url;
	let clientToken = url.searchParams.get('code');
	console.log(clientToken);
</script>

<svelte:head>
	<title>Notion | Robo's Kindle Clipping</title>
	<meta name="description" content="Format your 'My Clippings' file with ease" />
</svelte:head>

<section>
	<NavigationBar page="home" />
	<BodyContainer>
		<DropZone option="Notion"/>
	</BodyContainer>
	<Footer />
</section>

<style>
	/* INDEX */
	section {
		height: 100%;
		overflow: hidden;
		background-color: var(--color-bg-snow);
	}
</style>

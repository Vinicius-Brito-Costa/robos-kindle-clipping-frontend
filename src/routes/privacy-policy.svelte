<script>
    import Privacy from "$lib/components/body/about/Privacy.svelte";
    import BodyContainer from "$lib/components/body/BodyContainer.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
    import NavigationBar from "$lib/components/head/NavigationBar.svelte";
</script>
<section>
    <NavigationBar page="policy" />
    <BodyContainer>
        <Privacy />
    </BodyContainer>
    <Footer />
</section>

<style>
    section{
        height: 100%;
        overflow: hidden;
        background-color: var(--color-bg-snow);
    }
</style>
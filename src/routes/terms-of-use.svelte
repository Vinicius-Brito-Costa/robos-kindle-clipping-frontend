<script>
    import Terms from "$lib/components/body/about/Terms.svelte";
import BodyContainer from "$lib/components/body/BodyContainer.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
import NavigationBar from "$lib/components/head/NavigationBar.svelte";
</script>
<section>
    <NavigationBar page="terms" />
    <BodyContainer>
        <Terms />
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
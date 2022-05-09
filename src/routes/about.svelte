<script>
    import BodyContainer from "$lib/components/body/BodyContainer.svelte";
    import Footer from "$lib/components/footer/Footer.svelte";
import NavigationBar from "$lib/components/head/NavigationBar.svelte";
</script>
<section>
    <NavigationBar page="about" />
    <BodyContainer>
        <div style="height: 100%">Olá mundo!</div>
    </BodyContainer>
    <Footer />
</section>

<style>
    section{
        height: 100%;
    }
</style>
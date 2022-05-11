<script>
    export let option = "NONE";
</script>

<section>
    <div class="main-container">
        <span>Selected option: <b>{option}</b></span>
        <h1>Drop your 'My Clippings' file here.</h1>
    </div>
</section>

<style>
    section{
        background-color: rgb(177, 177, 177);
        height: 100%;
        display: grid;
        grid-template-columns: var(--application-grid-template);
        grid-template-rows: 1fr 2fr 1fr;
    }
    .main-container{
        grid-column-start: 2;
        grid-row-start: 2;
        margin: auto;
        text-align: center;
    }
</style>
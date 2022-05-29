<script lang="ts">
    import Export from "./Export.svelte";
    import type ExportInterface from "./ExportClass";
    export let exports: ExportInterface[];
    export let showDropZone: boolean;
    export let option: string;
    export let isIntegration: boolean;
    let grid = "";
    exports.forEach(() => grid += "1fr ");

    function exportTo(exp: string){
        showDropZone = true;
        isIntegration = false;
        option = exp;
    }

    async function integrateTo(integration: string){
        showDropZone = true;
        isIntegration = true;
        window.location.href = await fetch("/api/integration-url/" + integration.toLowerCase()).then(res => res.text()).then(res => res);
    }
</script>

<section>
    <h2>Pick which option suits you:</h2>
    <div class="export-container" style={"grid-template-columns: " + grid}>
        {#each exports as option}
            <Export options={option} callback={() => option.isIntegration ? integrateTo(option.command) : exportTo(option.command)}/>
        {/each}
    </div>
</section>

<style>
    section{
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: var(--application-grid-template);
        grid-template-rows: 2fr 1fr 3fr 1fr;
        background: rgb(187,187,187);
        border-top: solid 1px rgb(231, 231, 231);
        border-bottom: solid 1px rgb(231, 231, 231);
        background: linear-gradient(180deg, var(--color-bg-white) 0%, var(--color-bg-snow) 5%);
    }
    h2{
        margin: auto;
        grid-column-start: 2;
        grid-row-start: 2;
        color: var(--color-focus);
    }
    .export-container{
        grid-column-start: 2;
        grid-row-start: 3;
        display: grid;
    }
</style>
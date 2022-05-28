<script lang="ts">
    import type ExportInterface from "./ExportClass";
    export let options: ExportInterface;
    export let callback: () => void;

    function callbackHandler(){
        // DO STUFF

        callback()
    }
</script>

<div class="export-container">
    <div class="container-limiter">
        <div class="export-image-container" on:click={() => callbackHandler()}>
            <img src={options.img} alt={options.command} />
        </div>
    </div>
    <span class="command">{options.command.toUpperCase()}</span>
</div>

<style>
    .export-container{
        margin: 0 auto auto;
        font-family: var(--font-roboto-mono);
        font-size: clamp(8px, 100%, 15px);
        height: 160px;
        width: 160px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
    }
    .export-container .command{
        transition: all .2s ease-in;
    }
    .command{
        color: var(--color-focus);
        font-weight: bolder;
    }
    .container-limiter{
        width: 130px;
        height: 130px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .export-image-container{
        z-index: 2;
        height: 70%;
        width: 70%;
        cursor: pointer;
        object-fit: contain;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: rgb(255, 255, 255);
        border: 1px solid rgb(221, 221, 221);
        border-radius: var(--round-corner);
        box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.452);
        transition: all .3s linear;
    }
    .export-image-container img{
        height: 80%;
        width: 80%;
    }
    .export-image-container:hover{
        height: 90%;
        width: 90%;
        box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.144);
        border: 1px solid var(--color-accent);
    }
    .container-limiter:hover ~ .command{
        opacity: 0;
        transform: translateY(-10px);
    }
</style>
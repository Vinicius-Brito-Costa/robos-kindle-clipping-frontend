<script lang="ts">
	export let option = 'NONE';
    export let token = "";

	export async function drop(event: DragEvent) {
		event.preventDefault();
		
        let dataTransfer = event.dataTransfer;
        if(dataTransfer){
            let file = dataTransfer.files[0]
            if(file){
                let splitFileName = file.name.split(".");
                let fileExtension = splitFileName[splitFileName.length - 1]
                console.log(fileExtension);
                console.log(file.type);
                if(fileExtension.toLowerCase() == "txt" && file.type.toLowerCase() == "text/plain"){
                    console.log("Agora pode seguir")
                    console.log(file)
                    let request = {
                        integration: option,
                        clientToken: token,
                        clippings: await file.text()
                    }
                    let options = {
                        method: "POST",
                        body: JSON.stringify(request)
                    }
                    await fetch("/api/integration", options).then(res => console.log(res));
                }
            }
        }
		return true;
	}
    export function dragover (ev: DragEvent) {
		ev.preventDefault();
		if(ev.dataTransfer){
            ev.dataTransfer.dropEffect = 'move';
        }
	}

</script>

<section on:drop={(event) => drop(event)}
    on:dragover={event => dragover(event)}>
    <div class="overlay"></div>
	<div class="main-container" >
		<span>Selected option: <b>{option}</b></span>
		<h1>Drop your 'My Clippings' file here.</h1>
	</div>
</section>

<style>
	section {
		background-color: rgb(177, 177, 177);
		height: 100%;
		display: grid;
		grid-template-columns: var(--application-grid-template);
		grid-template-rows: 1fr 2fr 1fr;
	}
    .overlay{
        display: none;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.322)
    }
	.main-container {
		grid-column-start: 2;
		grid-row-start: 2;
		margin: auto;
		text-align: center;
	}
</style>

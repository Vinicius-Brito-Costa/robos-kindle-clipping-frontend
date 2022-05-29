export default function download(blob: Blob, extension: string){
    let link = document.createElement("a")
    link.href = window.URL.createObjectURL(blob);
    link.target = "_blank";
    link.download = "My Clippings." + extension;
    link.click();
}

import { constants } from "$lib/components/api/consts";
import getToken from "$lib/components/api/token";

const integrationUrl: string = constants.VITE_APPLICATION_BASE_PATH + constants.VITE_DOWNLOAD_PATH;

const integrationURLMap: Record<string, string> = {
    json: integrationUrl + "json",
    docx: integrationUrl + "docx"
}

//@ts-ignore
export async function post({ request }){
    const requestBody: DownloadRequest = await request.json()
    console.log(requestBody)
    
    return await getToken(fetch).then(token => {
        let actualUrl: string = integrationURLMap[requestBody.type.toLowerCase()]
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(new DownloadRequestDTO(requestBody.clippings))
        }
        return fetch(actualUrl, options)
        .then(res => res.json())
        .then(res => res as DownloadResponse)
        .then(res => {
            console.log(res)
            return { body: res.data }
        })
    })
}

class DownloadRequest{
    type: string;
    clippings: string;

    constructor(type:string, clippings: string) {
        this.type = type;
        this.clippings = clippings;
    }
}

class DownloadRequestDTO{
    clippings: string;

    constructor(clippings: string) {
        this.clippings = clippings;
    }
}


class DownloadResponse{
    code: string;
    data: any;

    constructor(code: string, data: any) {
        this.code = code;
        this.data = data;
    }
}

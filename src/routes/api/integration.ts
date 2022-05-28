import getToken from "$lib/components/api/token"
import { constants } from "$lib/components/api/consts";

const integrationUrl: string = constants.VITE_APPLICATION_BASE_PATH + constants.VITE_INTEGRATION_PATH;

const integrationURLMap: Record<string, string> = {
    notion: integrationUrl + "notion"
}

//@ts-ignore
export async function post({ request }){
    const requestBody: IntegrationRequest = await request.request.json()
    console.log(requestBody)
    
    return await getToken(fetch).then(token => {
        let actualUrl: string = integrationURLMap[requestBody.integration.toLowerCase()]
        let options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token
            },
            body: JSON.stringify(new IntegrationRequestDTO(requestBody))
        }
        return fetch(actualUrl, options)
        .then(res => res.json())
        .then(res => res as IntegrationResponse)
        .then(res => {
            console.log(res)
            return { body: res }
        })
    })
}

class IntegrationRequest{
    integration: string;
    clientToken: string;
    clippings: string;

    constructor(integration:string, clientToken: string, clippings: string) {
        this.integration = integration;
        this.clientToken = clientToken;
        this.clippings = clippings;
    }
}

class IntegrationRequestDTO{
    clientToken: string;
    clippings: string;

    constructor(request?: IntegrationRequest, clientToken?: string, clippings?: string) {
        if(request != undefined){
            this.clientToken = request.clientToken;
            this.clippings = request.clippings;
        }
        else{
            this.clientToken = clientToken ? clientToken : "";
            this.clippings = clippings ? clippings : "";
        }
    }
}

class IntegrationResponse{
    code: string;
    data: any;

    constructor(code: string, data: any) {
        this.code = code;
        this.data = data;
    }
}
class IntegrationResponseData{
    bookCount: number;
    clippingCount: number;

    constructor(bookCount: number, clippingCount: number) {
        this.bookCount = bookCount;
        this.clippingCount = clippingCount;
    }
}
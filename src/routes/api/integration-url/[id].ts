import getToken from "$lib/components/api/token";
import { constants } from "src/conts";

const integrationUrl: string = constants.VITE_APPLICATION_BASE_PATH + constants.VITE_INTEGRATION_AUTH_PATH;

const integrationURLMap: Record<string, string> = {
    notion: integrationUrl + "notion"
}

//@ts-ignore
export async function get({ params }){
    console.log(params)
    return await getToken(fetch).then(token => {
        console.log(integrationURLMap[params.id])
        return fetch(integrationURLMap[params.id], {headers: { "Authorization": token }})
        .then(res => res.json())
        .then(res => {
            return { body: res.data.integrationUrl }
        })
    })
}
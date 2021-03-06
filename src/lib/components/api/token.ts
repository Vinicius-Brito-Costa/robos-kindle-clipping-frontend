import { constants } from "$lib/components/api/consts";

const getTokenUrl = constants.VITE_APPLICATION_BASE_PATH + constants.VITE_GET_APPLICATION_TOKEN_PATH;

export default async function getToken(fetch) : Promise<string> {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            new TokenRequest(process.env.ROBO_CLIPPING_USER as string, 
                process.env.ROBO_CLIPPING_PASSWORD as string))
    }
    return await fetch(getTokenUrl, options)
    .then(res => {
        if(res.ok){
            return res.json();
        }
        throw new Error("Invalid Request");
        
    })
    .then(res => (res as TokenResponse).data.token)
}
class TokenRequest{
    user: string;
    password: string;

    constructor(user: string, password: string){
        this.user = user;
        this.password = password;
    }
}
class TokenResponse{
    code: string;
    data: ResponseTokenData;

    constructor(code: string, data: ResponseTokenData){
        this.code = code;
        this.data = data;
    }
}
class ResponseTokenData{
    token: string;

    constructor(token: string) {
        this.token = token;
    }
}
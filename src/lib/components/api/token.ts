import fetch from "node-fetch"

const getTokenUrl = import.meta.env.VITE_APPLICATION_BASE_PATH + import.meta.env.VITE_GET_APPLICATION_TOKEN_PATH;

export default async function getToken() : Promise<string> {
    let options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(
            new TokenRequest(process.env.ROBO_CLIPPING_USER as string, 
                process.env.ROBO_CLIPPING_PASSWORD as string))
    }
    return fetch(getTokenUrl, options)
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
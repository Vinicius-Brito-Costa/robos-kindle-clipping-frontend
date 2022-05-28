/**
 * @param {any} event
 */
export function get(event){
    console.log(event)
    let env = process.env.ENV_VARIABLE
    return {
        body: { env }
    }
}
export default function downloadMap(result: Object, option: string): string{
    if(option == "json"){
        return JSON.stringify(result)
    }
    if(option == "docx"){
        return result as string
    }
    return ""
}
export default class Export{
    img: string;
    command: string;
    isIntegration: boolean;

    constructor(img: string, command: string, isIntegration: boolean){
        this.img = img;
        this.command = command;
        this.isIntegration = isIntegration;
    }
}
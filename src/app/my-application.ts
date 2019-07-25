export class MyApplication {
    name:string;
    description:string;
    platform:string;
    image:string;
    icon:string;

    textColor:string;
    backgroundColor:string;

    constructor(name:string,description:string,platform:string,image:string,textColor:string,backgroundColor:string){
        this.name = name;
        this.description = description;
        this.platform = platform;
        this.image = image;
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
    }
}

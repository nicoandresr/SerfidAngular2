export class Device {

    tag: string;
    name: string;
    detail: string;
    registerDate: string;
    price: number;
    rating: number;
    imageUrl: string;
    
    constructor() {
        this.tag = "";
        this.name = "";
        this.detail = "";
        this.registerDate = "";
        this.price = 0;
        this.rating = 0;
        this.imageUrl = "";
    }
}

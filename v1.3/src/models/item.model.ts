import { Guid } from "guid-typescript";

export class Item {
    constructor(
        public id: Guid,
        public itemName: string,
        public brand: string,
        public price: number,
        public quantity: number,
    ) {
    }
    public totalStockPrice: Number = this.price * this.quantity
}
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})


export class StockComponent implements OnInit {

  
  stock: any[] = []
  itemName: String = '';
  brand: String = ''
  quantity: number = 0
  price: number = 0

  addItem(){ 
    const item = new Item();
    item['itemName'] = this.itemName
    item['quantity'] = this.quantity
    item['brand'] = this.brand
    item['price'] = this.price

    this.stock.push(item)

    this.itemName = ''
    this.quantity = 0
    this.brand = ''
    this.price = 0
  }


  clearStockList() {
    this.stock = []
  }

  onDeleteStockItem(id: any){
    this.stock.splice(id, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }
}

class Item {
  itemName: String = '';
  quantity: number = 0;
  brand: String = ''
  price: number = 0;
  totalStockPrice: number = this.quantity * this.price;
}

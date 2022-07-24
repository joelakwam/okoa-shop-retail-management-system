import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})


export class SalesComponent implements OnInit {

  sales: any[] = []
  itemName: String = '';
  quantity: number = 0
  brand: String = ''
  price: number = 0

  addSaleItem(){ 
    const item = new SaleItem();

    item['id'] = this.sales.length
    item['itemName'] = this.itemName
    item['quantity'] = this.quantity
    item['brand'] = this.brand
    item['price'] = this.price

    this.sales.push(item)

    this.itemName = ''
    this.quantity = 0
    this.brand = ''
    this.price = 0
  }

  clearSalesList() {
    this.sales = []
  }

  onDeleteSaleItem(id: any){
    this.sales.splice(id, 1)
  }

  constructor() { }

  ngOnInit(): void {
  }
}

class SaleItem {
  id: any = 0
  itemName: String = '';
  quantity: number = 0;
  brand: String = ''
  price: number = 0;
}

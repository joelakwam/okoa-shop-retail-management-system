import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.scss']
})


export class StockComponent implements OnInit {

  stock: any[] = []

  itemName: string = '';
  brand: string = ''
  quantity: number = 0
  price: number = 0

  addNewItem(){ 
    const item = new Item(Guid.create(), this.itemName, this.brand, this.price, this.quantity);

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


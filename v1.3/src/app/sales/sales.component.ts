import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Item } from 'src/models/item.model';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})


export class SalesComponent implements OnInit {

  sales: any[] = []

  itemName: string = '';
  quantity: number = 0
  brand: string = ''
  price: number = 0

  addSaleItem(){ 
    const item = new Item(Guid.create(), this.itemName, this.brand, this.price, this.quantity);

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


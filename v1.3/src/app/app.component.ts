import { Component } from '@angular/core';
import { Item } from 'src/models/item.model';
import { Guid } from "guid-typescript";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  sales: Item[] = []
  inventory: any[] = []

  

  // items: any[] = [
  //   new Item(Guid.create(), 'Toothpaste', 'Colgate', 50, 78),
  //   new Item(Guid.create(), 'Toothpaste', 'Close Up', 50, 70),
  //   new Item(Guid.create(), 'Cooking Oil', 'Elianto', 100, 48),  
  //   new Item(Guid.create(), 'Cooking Oil', 'Top Fry', 120, 88)
  // ]

  // onDeleteSaleItem(i: any){
  //   this.items.splice(i, 1)
  // }
}

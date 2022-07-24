import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { StockComponent } from './stock/stock.component';
import { SalesComponent } from './sales/sales.component';
import { UsersComponent } from './users/users.component';
import { FormsModule  } from '@angular/forms';
import { ReportComponent } from './report/report.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    StockComponent,
    SalesComponent,
    UsersComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

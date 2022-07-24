import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { SalesComponent } from './sales/sales.component';
import { StockComponent } from './stock/stock.component';
import { ReportComponent } from './report/report.component';

const routes: Routes = [
  {
    path: 'sales',
    component: SalesComponent
  },
  {
    path: 'stock',
    component: StockComponent
  },
  {
    path: 'report',
    component: ReportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

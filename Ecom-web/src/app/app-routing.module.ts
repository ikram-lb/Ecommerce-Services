import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductsComponent} from "./products/products.component";
import {CustomersComponent} from "./customers/customers.component";

const routes: Routes = [
  {
    path: "products", component: ProductsComponent

  },
  {path : "custumers", component: CustomersComponent}


];

@NgModule({
  imports: [RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

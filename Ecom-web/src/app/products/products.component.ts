import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products : any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("http://localhost:9999/INVENTORY-SERVICE/products").subscribe({

      next: (data: Object) => {

        this.products = data;
      },
      error: (err) => {
      }
    });
  }
}

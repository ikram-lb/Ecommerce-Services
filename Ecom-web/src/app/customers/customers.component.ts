import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent {
  customers : any;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get("http://localhost:9999/CUSTOMER-SERVICE/customers").subscribe({

      next: (data: Object) => {

        this.customers = data;
      },
      error: (err) => {
      }
    });
  }
  getOrders(p:any){

  }

}

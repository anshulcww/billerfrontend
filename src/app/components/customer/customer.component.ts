import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../services/customer'


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
  providers:[CustomerService]
})
export class CustomerComponent implements OnInit {
customers:Customer[]=[];
  constructor(private customerService:CustomerService) { 
  
  }

  ngOnInit() {
    this.customerService.getCustomers()
      .subscribe(customers =>
        this.customers = customers)
  }

}

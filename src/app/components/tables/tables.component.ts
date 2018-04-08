import { Component, OnInit } from '@angular/core';
import {TableService} from '../../services/table.service';
import {Table} from '../../services/table'
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../services/customer'
import { Menu } from '../../services/menu'
import { Item } from '../../services/item'

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css'],
  providers: [TableService, CustomerService]
})
export class TablesComponent implements OnInit {
  tables: Table[];
  table: Table;
  tablename: string;
  customers: Customer[] =[];
  customer: Customer;
  name: string;
  email: string;
  number: string;
  showFiller = false;
  menus: Menu[];
  quantities = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' }
  ];
  item:Item;
  items:Item[] =[];
  menuname:string;
  quantity: string;
  rate: string;
  
  constructor(private tableService: TableService) { }
 addItemToBill(menuname: any){
   console.log(menuname);
   const newItem = {
     menuname: this.menuname,
     quantity: this.quantity,
     rate: this.rate
   }
   this.tableService.addItemToBill(newItem)
   .subscribe(item => {
     this.items.push(item);
     this.tableService.getItems()
     .subscribe(items =>
    this.items = items)
   })
   console.log(newItem);
 }
  addTable(){
    const newTable = {
      tablename: this.tablename
    }
    this.tableService.addTable(newTable)
    .subscribe(table => {
      this.tables.push(table);
      this.tableService.getTables()
        .subscribe(tables =>
          this.tables = tables)
    });
  }
  addCustomer() {
    const newCustomer = {
      name: this.name,
      email: this.email,
      number: this.number,
    }
    this.tableService.addCustomer(newCustomer)
    .subscribe(customer => {
      this.customers.push(customer);
      this.tableService.getCustomer(customer._id)
      .subscribe(c1 =>
       this.customer= c1);
      this.tableService.getCustomers()
      .subscribe(customers => 
      this.customers = customers)
    });
    console.log(newCustomer);
    
    
  }
  deleteTable(id:any){
    var tables = this.tables;
    this.tableService.deleteTable(id)
    .subscribe(data => {
      if(data.n == 1){
        for(var i =0; i< tables.length; i++){
          if(tables[i]._id == id){
            tables.splice(i, 1);
          }
        }
      }
    });
    this.tableService.getTables()
      .subscribe(tables =>
        this.tables = tables)

  }

  ngOnInit() {
    
   this.tableService.getTables()
    .subscribe( tables => 
    this.tables = tables);
    this.tableService.getMenu()
      .subscribe(menus =>
        this.menus = menus);
  }


}

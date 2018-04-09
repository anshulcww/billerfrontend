import { Component, OnInit } from '@angular/core';
import {TableService} from '../../services/table.service';
import {Table} from '../../services/table'
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../services/customer'
import { Menu } from '../../services/menu'


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
  menu: Menu;
  quantities = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' }
  ];
  constructor(private tableService: TableService) { }
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
      .subscribe(customer =>
       this.customer= customer);
      this.tableService.getCustomers()
      .subscribe(customers => 
      this.customers = customers)
    });
  }
  addItemToBill(id: any){
  console.log(id);
  this.tableService.getMenu(id)
  .subscribe(menu =>
  this.menu = menu)
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
    this.tableService.getMenus()
      .subscribe(menus =>
        this.menus = menus);
  }


}

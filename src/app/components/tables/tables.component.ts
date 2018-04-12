import { Component, OnInit } from '@angular/core';
import {TableService} from '../../services/table.service';
import {Table} from '../../services/table'
import { CustomerService } from '../../services/customer.service';
import { Customer } from '../../services/customer'
import { Menu } from '../../services/menu'
import {Bill} from '../../services/table'
import {BillItem} from '../../services/table'


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
  bill: Bill ;
  selectedQuantity: string = '';
  totalAmount;
  constructor(private tableService: TableService) { }

  selectChangeHandler(event: any){
    this.selectedQuantity = event.target.value;
  }
  addItemToBill(id: any, rate: any, quantity: any) {
    const billItem : BillItem = {
      "menuId": id,
      "quantity": quantity,
      "amount": rate*quantity,
    }
    this.bill.billItems.push(billItem)
    console.log(billItem);
    this.tableService.getMenu(id)
      .subscribe(menu =>
        this.menu = menu)
  }
  checkOut(): void {
/*     if (this.bill.billItems.length > 0) {
      forEach(let billItem in this.bill.billItems)
        this.bill.billAmount = this.bill.billAmount + billItem.amount;
     
       */

  /*     this.bill.customerId = ;
      this.bill.tabelId = ;
      this.bill.billingDateTime = new Date();
      this.bill.waiterId = ;

      this.billApi.post(this.bill).subscribe(bill => {
        console.log('Please pay : ' + bill.amount);
        console.log('Thanks Mr  : ' + bill.customerId);

      });

    } */
  }

  addTable() {
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
            this.customer = customer);
        this.tableService.getCustomers()
          .subscribe(customers =>
            this.customers = customers)
      });
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
    this.bill = new Bill();
    this.bill.billItems =[];
    this.totalAmount;
   this.tableService.getTables()
    .subscribe( tables => 
    this.tables = tables);
    this.tableService.getMenus()
      .subscribe(menus =>
        this.menus = menus);
  }


}

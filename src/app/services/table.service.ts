import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Table} from './table';
import 'rxjs/add/operator/map';

@Injectable()
export class TableService {

  constructor(private http: Http) { }
//retrieving items
getItems(){
  return this.http.get('http://localhost:3000/api/items')
    .map(res => res.json());
}
getMenu(){
  return this.http.get('http://localhost:3000/api/menus')
    .map(res => res.json());
}
  //retrieving tables
  getTables() {
    return this.http.get('http://localhost:3000/api/tables')
      .map(res => res.json());
  }
  getCustomers(){
    return this.http.get('http://localhost:3000/api/customers')
      .map(res => res.json());
  }
  getCustomer(id){
    return this.http.get('http://localhost:3000/api/customers/' + id )
      .map(res => res.json());
  }
  addItemToBill(newItem) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/items', newItem, { headers: headers })
      .map(res => res.json());
  }
  
  //addtable method
  addTable(newTable) {
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/tables', newTable, { headers: headers })
      .map(res => res.json());
  }
  addCustomer(newCustomer){
    console.log("asfas")
    console.log(newCustomer);
    
    var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/api/customers', newCustomer, { headers: headers })
      .map(res => res.json());

  }
 
  deleteTable(id) {

    return this.http.delete('http://localhost:3000/api/tables/' + id)
      .map(res => res.json());
  }
}

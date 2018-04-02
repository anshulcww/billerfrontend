import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Menu } from './menu';
import 'rxjs/add/operator/map';

@Injectable()
export class MenuService {
  
    constructor(private http: Http){}

    //retrieving menu items
    getMenu(){
        return this.http.get('http://localhost:3000/api/menus')
        .map(res => res.json());
    }
     addMenu(newMenu){
         var headers = new Headers();
         headers.append('Content-Type', 'application/json');
         return this.http.post('http://localhost:3000/api/menus', newMenu, { headers: headers })
             .map(res => res.json());

     }
}
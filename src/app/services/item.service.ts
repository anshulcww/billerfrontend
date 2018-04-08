import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Item } from './item';
import 'rxjs/add/operator/map';

@Injectable()

export class ItemService {
    constructor(private http: Http) { }
    getItems() {
        return this.http.get('http://localhost:3000/api/items')
            .map(res => res.json());
    }
  
}
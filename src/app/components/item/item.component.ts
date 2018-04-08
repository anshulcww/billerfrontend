import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../services/item'
import { Customer } from '../../services/customer';


@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.css'],
    providers: [ItemService]
})
export class ItemComponent implements OnInit {
    customer: Customer[] = [];
    constructor(private itemService: ItemService) {

    }

    ngOnInit() {
       
    }

}
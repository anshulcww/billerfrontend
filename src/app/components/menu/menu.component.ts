import { Component, OnInit } from '@angular/core';
import {MenuService} from '../../services/menu.service';
import {Menu} from '../../services/menu'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  providers: [MenuService]
})
export class MenuComponent implements OnInit {
  menus: Menu[];
  menu: Menu;
menuname: string;
quantity: string;
rate:string;
  constructor(private menuService: MenuService) { }
addMenu(){
  console.log("anshul");
  const newMenu = {
    menuname: this.menuname,
    quantity: this.quantity,
    rate: this.rate,
  }
  this.menuService.addMenu(newMenu)
    .subscribe(menu => {
      this.menus.push(menu);
      this.menuService.getMenu()
        .subscribe(menus=>
          this.menus= menus)
    });
}
  ngOnInit() {
    this.menuService.getMenu()
      .subscribe(menus =>
        this.menus = menus)
  }

}

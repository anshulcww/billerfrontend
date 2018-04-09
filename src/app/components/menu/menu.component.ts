import { Component, OnInit, Input } from '@angular/core';
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
rate:string;



  constructor(private menuService: MenuService) { }
addMenu(){
  console.log("anshul");
  const newMenu = {
    menuname: this.menuname,
    rate: this.rate,
  }
  this.menuService.addMenu(newMenu)
    .subscribe(menu => {
      this.menus.push(menu);
      this.menuService.getMenus()
        .subscribe(menus=>
          this.menus= menus)
    });
}
  ngOnInit() {
    this.menuService.getMenus()
      .subscribe(menus =>
        this.menus = menus)
  }

}

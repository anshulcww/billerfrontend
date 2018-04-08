import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CustomerComponent } from './components/customer/customer.component';
import { MenuComponent } from './components/menu/menu.component';
import { ItemComponent } from './components/item/item.component';
import { TablesComponent } from './components/tables/tables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule, MatButtonModule, MatIconModule, MatCardModule, MatSidenavModule , MatSelectModule} from '@angular/material';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatInputModule } from '@angular/material';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

const appRoutes: Routes = [
  { path: '', component: TablesComponent },
  { path: 'customers', component: CustomerComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'items', component: ItemComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    TablesComponent,
    CustomerComponent,
    MenuComponent,
    ItemComponent
  ],
  imports: [
    HttpModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    RouterModule.forRoot(appRoutes),
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { PersistenceService } from './persistence.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ItemsManageComponent } from './items-manage/items-manage.component';
import { TestComponent } from './test/test.component';
import { ItemComponent } from './items-manage/item/item.component';

export const ROUTES: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'items-manager', component: ItemsManageComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ItemsManageComponent,
    TestComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PersistenceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

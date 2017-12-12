import { PersistenceService } from './../persistence.service';
import { ItemComponent } from './item/item.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-items-manage',
  templateUrl: './items-manage.component.html',
  styleUrls: ['./items-manage.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemsManageComponent implements OnInit {

  public itemToAdd: string;

  constructor(public persistenceService: PersistenceService) {
  }

  ngOnInit() {
  }

  buttonClicked() {
    this.persistenceService.AddItem(this.itemToAdd);
  }
  
  deleteItem(item: string) {
    this.persistenceService.DeleteItem(item);
  }
}

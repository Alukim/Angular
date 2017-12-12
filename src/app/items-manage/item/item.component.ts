import { Component, OnInit,  EventEmitter, ViewEncapsulation, Input, Output } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ItemComponent implements OnInit {

  @Input() itemValue: string;
  @Output() onDelete = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {
  }

  handler() {
    this.onDelete.emit(this.itemValue);
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {

  private ItemsList: string[];

  public AddItem(item: string): void {
    this.ItemsList.push(item);
  }

  public GetItems(): string[] {
    return this.ItemsList;
  }

  public DeleteItem(item: string): void {
    this.ItemsList = this.ItemsList.filter(x => x != item);
  }

  constructor() { 
    this.ItemsList = new Array();
  }

}
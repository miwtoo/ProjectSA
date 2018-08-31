import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';

export interface PeriodicElement {
  id: string;
  name: string;
  type: string;
  price: number;
  amount: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: "1", name: "", type: "", price: 0, amount: 0},
  {id: "2", name: "", type: "", price: 0, amount: 0},
  {id: "3", name: "", type: "", price: 0, amount: 0},
  {id: "4", name: "", type: "", price: 0, amount: 0},
];
@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'type', 'price','amount'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor() { }

  ngOnInit() {
  }

}

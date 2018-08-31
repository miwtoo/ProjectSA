import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  item_name:string;
  amount: number;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: "1", item_name: "", amount: 0, time: ""},
  {name: "2", item_name: "", amount: 0, time: ""},
  {name: "3", item_name: "", amount: 0, time: ""},
  {name: "4", item_name: "", amount: 0, time: ""},
  {name: "5", item_name: "", amount: 0, time: ""},
];
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  displayedColumns: string[] = ['name', 'item_name', 'amount', 'time'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

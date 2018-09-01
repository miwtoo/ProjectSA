import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  item_id:string;
  amount: number;
  time: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: "นาย วงศกร ชูเกษม", item_id: "PSU004", amount: 5, time: "5 สิงหาคม 2561, 10:20 น."},
  {name: "นาย ศรัญยู เงาศรี", item_id: "ZXP003", amount: 10, time: "5 สิงหาคม 2561, 16:00 น."},
  {name: "นาย ศรัญยู เงาศรี", item_id: "IPX002", amount: 5, time: "5 สิงหาคม 2561, 16:10 น."},
  {name: "นาย วงศกร ชูเกษม", item_id: "PSU001", amount: 5, time: "6 สิงหาคม 2561, 10:00 น."},
  {name: "นาย ชาญชัย นนทะชัย", item_id: "ZXP003", amount: 10, time: "6 สิงหาคม 2561, 16:00 น."},
];
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  displayedColumns: string[] = ['name', 'item_id', 'amount', 'time'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit() {
  }

}

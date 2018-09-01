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
  {id: "IPX001", name: "* SET PROVAMED SUN SPF 50+ FACE สี BEIGE (FREE SUN PERFECAT CLEANSING WATER 50ML.)", type: "เวชสำอาง/ครีมบำรุงผิว", price: 100, amount: 100},
  {id: "IPX002", name: "ACNE-AID 100GM ก้อน***รุ่นใหม่ [GSK/STEFEL]", type: "เวชสำอาง/ครีมบำรุงผิว", price: 180, amount: 30},
  {id: "ZXP003", name: "AMSEL ACEROLA CHERRY PLUS 1200 MG 10SAC", type: "ผลิตภัณฑ์เสริมอาหาร", price: 180, amount: 20},
  {id: "PSU004", name: "*KACHANA (กระชายดำสกัด+สมุนไพรบำรุงผู้ชาย) 3*10's[BKD]กล่องรุ่นใหม่", type: " สมุนไพรยาแผนโบราณ", price: 850, amount: 10},
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

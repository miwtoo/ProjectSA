import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {dateformat} from 'dateformat';
export interface PeriodicElement {
  name: string;
  item_id:string;
  amount: number;
  time: Date;
}
let dateFormat = require('dateformat');
@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  
  displayedColumns: string[] = ['name', 'item_id', 'amount', 'time'];
  dataSource;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const ELEMENT_DATA: PeriodicElement[] = [];
   

    
    this.http.get("http://localhost:8080/withdraw").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          let newdate = dateFormat( new Date(data[index].date), "h:MM:ss TT")
          ELEMENT_DATA.push({
            name: data[index].userId.userName,
            item_id: data[index].itemId.itemName,
            amount: data[index].withdraw_amount,
            time: newdate
          })


        }
        //console.log(ELEMENT_DATA);
        this.dataSource = ELEMENT_DATA;
      },
      error => {
        console.log("Error", error);
      }

    );
  }

}

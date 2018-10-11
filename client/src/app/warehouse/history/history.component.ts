import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import dateformat from 'dateformat';
export interface PeriodicElement {
  name: string;
  itemName:string;
  amount: number;
  time: Date;
  date: Date;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  
  displayedColumns: string[] = ['name', 'itemName', 'amount',  'date', 'time'];
  dataSource;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    const ELEMENT_DATA: PeriodicElement[] = [];
   

    
    this.http.get("http://localhost:8080/withdraw").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          ELEMENT_DATA.push({
            name: data[index].userId.userName,
            itemName: data[index].itemId.itemName,
            amount: data[index].withdraw_amount,
            time: dateformat( new Date(data[index].date), "h:MM:ss TT"),
            date: dateformat( new Date(data[index].date), "dd mmmm yyyy")
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

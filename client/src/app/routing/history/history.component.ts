import { Component, OnInit } from '@angular/core';
import {HttpClient } from '@angular/common/http';
export interface PeriodicElement {
  name: string;
  item_id:string;
  amount: number;
  time: string;
}

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
          ELEMENT_DATA.push({
            name: data[index].user_id.user_name,
            item_id: data[index].item_id.item_name,
            amount: data[index].amount,
            time: data[index].time
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

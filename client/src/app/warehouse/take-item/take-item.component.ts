import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient,HttpParams } from '@angular/common/http';
import {dateformat} from 'dateformat';

@Component({
  selector: 'app-take-item',
  templateUrl: './take-item.component.html',
  styleUrls: ['./take-item.component.css']
})


export class TakeItemComponent implements OnInit {


  onClickSubmit(data) {
    let dateFormat = dateformat;
    let now = new Date();

    const body = new HttpParams()
    .set('user_id', data.user_id.toString())
    .set('item_id', data.item_id.toString())
    .set('amount', data.amount.toString())
    .set('time', dateFormat(now, "HH:MM:ss TT"))
    .set('date', dateFormat(now, "dd mmmm yyyy"));

    console.log(body.toString());

    this.http.post("http://localhost:8080/withdraw",body.toString(),{headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }

    );

    console.log(data)
  }
  constructor(private http: HttpClient) {}

  ngOnInit() {

    

  }

}

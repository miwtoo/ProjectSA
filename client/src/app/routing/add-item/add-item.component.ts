import { Component, OnInit } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {HttpClient,HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  typelists = [];

  onClickSubmit(data) {

    const body = new HttpParams()
    .set('item_name', data.item_name.toString())
    .set('type.type_id', data.type_id.toString())
    .set('price', data.price.toString())
    .set('amount', data.amount.toString())

    console.log(body.toString());

    this.http.post("http://localhost:8080/item",body.toString(),{headers: new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')}).subscribe(
      data => {
        console.log("POST Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      }

    );
    
  }
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.typelists.push(
      
    )

    this.http.get("http://localhost:8080/typelist").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          this.typelists.push({
            value: data[index].type_id, 
            viewValue: data[index].type
          })


        }
        //console.log(ELEMENT_DATA);
      },
      error => {
        console.log("Error", error);
      }

    );
  }

}

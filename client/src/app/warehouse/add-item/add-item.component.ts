import { Component, OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { log } from 'util';
@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  categorys = [];

  onClickSubmit(data) {
    console.log(data);

    this.http.post("http://localhost:8080/item/" + "/" + data.item_name + "/" + data.price + "/" + data.categorys, "").subscribe(
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
    this.categorys.push(

    )

    this.http.get("http://localhost:8080/category").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          this.categorys.push({
            value: data[index].id,
            viewValue: data[index].name
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

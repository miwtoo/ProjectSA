import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {HttpClient } from '@angular/common/http';

export interface PeriodicElement {
  id: string;
  name: string;
  type: string;
  price: number;
  amount: number;
}


@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
   

  displayedColumns: string[] = ['id', 'name', 'type', 'price','amount'];
  dataSource = new MatTableDataSource();

 
    
  

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {

    const ELEMENT_DATA: PeriodicElement[] = [];
    
    this.http.get("http://localhost:8080/item").subscribe(
      data => {
        console.log("GET Request is successful ", data);
        for (let index = 0; index < data["length"]; index++) {
          ELEMENT_DATA.push({
            id: data[index].item_id,
            name: data[index].item_name,
            type: data[index].type.type,
            price: data[index].price,
            amount: data[index].amount
          })


        }
        //console.log(ELEMENT_DATA);
        this.dataSource = new MatTableDataSource(ELEMENT_DATA);
      },
      error => {
        console.log("Error", error);
      }

    );

    
  }

}

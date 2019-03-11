import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
// import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';

// const chunk = require('chunk');
// const chunks = require('chunk-array').chunks;
// chunks = require('chunk-array');


@Component({
  selector: 'app-gmail-component',
  templateUrl: './gmail-component.component.html',
  styleUrls: ['./gmail-component.component.css']
})

export class GmailComponentComponent implements OnInit {

  // displayColumns: string[] = ['Sr No.', 'Contact Name', 'Contact Number'];
  // dataSource: MatTableDataSource<any>;

  constructor( private dataService: DataServiceService ) {
    // this.dataSource = new MatTableDataSource();
  }

  ngOnInit() {
    this.getData();

  }

  data1:any[];
  data2:any[];

  getData() {
    this.dataService.getData().subscribe((data) => {
    // for(let s in data){
      //
      this.data1 = data;
    // }
    // this.data2 = chunk(this.data1,10);
    // console.log("Array");
    console.log(this.data1);
    });
    // this.data1 = [];

  }

}

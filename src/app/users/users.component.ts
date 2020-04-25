import { Component, OnInit } from "@angular/core";
import { data } from './data.json';

export interface User {
  name: string;
  email: string;
  type: string;
  rDate: string;
}

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  dataSource = data;
  displayedColumns: string[] = ['name', 'email', 'type', 'date'];
  constructor() {}

  ngOnInit() {
    console.log(this.dataSource[1]);
  }
}

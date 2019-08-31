import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { UserDetailsService } from '../user-details/userdetails.service';
import { IUser } from '.././libraries/models/user.model';

@Component({
  selector: 'app-user-dbdata',
  templateUrl: './user-dbdata.component.html',
  styleUrls: ['./user-dbdata.component.css']
})

export class UserDBDataComponent implements OnInit {
  displayedColumns: string[] = ['FullName','Adress','Email','EnterMessage','PhoneNumber'];
  iusermodel: IUser[];
  elementData: IUser[];
  dataSource: any;
 
  constructor(private dbdata: UserDetailsService) { 

    this.dbdata
    .getUserInfo()
    .subscribe((data: IUser[]) => {
      this.elementData = data;
     
      console.log('in Conssssssssss');
      console.log(this.elementData);
  });
  }
  ngOnInit() {
    this.iusermodel = this.elementData;
    
    console.log('in onitttt');
    console.log(this.elementData);
  }
  // dataSource = this.elementData;

}
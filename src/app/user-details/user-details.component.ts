import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UserDetailsService } from '../user-details/userdetails.service';



@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  angForm: FormGroup;
  durationInSeconds = 5;
  hide = true;
  constructor(private fb: FormBuilder, private userDetailsService:UserDetailsService) {
    this.createForm();
  }

  
  ngOnInit() {
  }
 createForm() {
    this.angForm = this.fb.group({
      FullName: ['', Validators.required],
      Adress: ['', Validators.required],
      Email: ['', Validators.required],
      EnterMessage: ['', Validators.required],
      PhoneNumber: ['', Validators.required]
    });
  }

  addUserInfo(FullName, Adress, Email,EnterMessage,PhoneNumber) {
    this.userDetailsService.addUserInfoService(FullName, Adress, Email,EnterMessage,PhoneNumber);
   
  }
  
}

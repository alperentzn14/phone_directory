import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import{ApiserviceService} from '../apiservice.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private service:ApiserviceService) { }

  errormsg:any;
  

  ngOnInit(): void {
  }
    userForm = new FormGroup({
      'name':new FormControl('',Validators.required),
      'Surname':new FormControl('',Validators.required),
      'Company':new FormControl('',Validators.required),
      'Phone_Number':new FormControl('',Validators.required)

    });
    userSubmit() {}
    //{
      /*if(this.userForm.valid){
        //console.log(this.userForm.value);
        this.service.addUser(this.userForm.value).subscribe((res)=>{
          console.log(res,'res==>');
        });

        this.service.getAllUsers().subscribe(
          //console.log(res,"res==>");
           res=>this.readData=res,
          //this.readData = res.data;
        );*/
     // }
      /*else{
        this.errormsg = 'All field is required!';
      }*/
    
}

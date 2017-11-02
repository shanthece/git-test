import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MyDataService } from './../my-data.service';
declare var firebase: any;

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent implements OnInit {
fbform;form;QuoteOfDay:string;name="";id;
ngOnInit() {
  this.form = new FormGroup({
    name : new FormControl("", Validators.compose(
      [Validators.required]
      
      )
    ),
    email : new FormControl("", Validators.compose([Validators.required,
    Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    ])
        ),
    city : new FormControl(""),
  })
  

this.newService.getData().subscribe(
      (data) => this.QuoteOfDay = data.value.joke,
      //data => console.log(data)
    )
this.fbGetData();

this.fbform = new FormGroup({
    id : new FormControl("", Validators.compose([Validators.required,Validators.minLength(2)
    ])
        ),
    name : new FormControl("",Validators.required),
  })
  }
emailChanged = function(oldValue, newValue){console.log(newValue);};
onSubmit = function(user){
          console.log(user);
        }

fbGetData(){
  firebase.database().ref('/').on('child_added', (data)=>{
      this.ninjas.push(data.val())
      //console.log(data.val())
  }
  )
}
fbPostData(id,name){
  firebase.database().ref('/').push({id:id,name:name});
  this.name = "";
  this.id = "";
  
}
  
  constructor(private newService: MyDataService) { 
     
  }
  ninjas=[];
  
}

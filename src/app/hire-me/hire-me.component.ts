import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

declare var firebase: any;


@Component({
  selector: 'app-hire-me',
  templateUrl: './hire-me.component.html',
  styleUrls: ['./hire-me.component.css']
})
export class HireMeComponent implements OnInit {
  rForm: FormGroup;
  post:any;                     // A property for our submitted form
  description:string = '';
  name:string = '';
  email:any = '';phone:any = '';
  titleAlert:string = 'This field is also required';

  constructor(private fb: FormBuilder) { 
    this.rForm = fb.group({
      'name' : [null, Validators.required],
      'email' : [null, Validators.compose([Validators.required,
      Validators.pattern(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)])
      ],
      'phone' : [null, Validators.compose([
        Validators.required, Validators.pattern(/(7|8|9)\d{9}/)])],
      'description' : [null, Validators.compose([Validators.required, Validators.minLength(10)])],
    });

  }
  addPost(post) {
    firebase.database().ref('/companies').push(post);
    console.log(post);
    /*this.name = post.name;
    this.email = post.email;
    this.phone = post.phone;
    this.description = post.description;*/
  }
  ngOnInit() {
  }

}

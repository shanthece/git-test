import { Component, OnInit } from '@angular/core';
import { MyDataService } from './../my-data.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PhoneNumber } from './phone-number';
declare var firebase: any;


@Component({
  selector: 'app-phone-login',
  templateUrl: './phone-login.component.html',
  styleUrls: ['./phone-login.component.css']
})

export class PhoneLoginComponent implements OnInit {
  windowRef: any;
  phoneNumber = new PhoneNumber()
  verificationCode: string;
  user: any;suser: any;
  phoneform;fbform;name:string;
  constructor(private newService: MyDataService) { }
  ngOnInit() {
    this.windowRef = this.newService.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
    this.windowRef.recaptchaVerifier.render()

    this.phoneform = new FormGroup({
      countrycode : new FormControl({value: '91', disabled: true}, Validators.required),
      phoneno : new FormControl("", Validators.compose([Validators.required,
    Validators.pattern(/(7|8|9)\d{9}/)
    ])
        )
    })


    this.fbform = new FormGroup({
    name : new FormControl("", Validators.required),
  })
  }

  fbPostData(name){
  //firebase.database().ref('/').push({name:name});
  this.name = "";
  console.log(name);

  }

  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = this.phoneNumber.e164;
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
            .then(result => {
                this.windowRef.confirmationResult = result;
                
            })
            .catch( error => console.log(error) );
  }
  verifyLoginCode() {
    this.windowRef.confirmationResult
                  .confirm(this.verificationCode)
                  .then( result => {
                    this.user = result.user;
    })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }
}

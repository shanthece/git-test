import { Component,  ViewChild, OnInit, HostListener } from '@angular/core';
import { MyDataService } from './../my-data.service';
import { CarouselConfig } from 'ngx-bootstrap/carousel';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { DropdownDirective } from "./dropdown.directive";
import { DomSanitizer } from '@angular/platform-browser';
import {TitleComponent} from './title.component';
    
 @Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css'],
  providers: [{provide: CarouselConfig, useValue: {interval: 1800, noPause: true, noWrap: false}}]
})
export class CheckComponent implements OnInit {
  location = {};subtitle = '(v1)';
   setPosition(position){
      this.location = position.coords;
      console.log(this.location);
    }
    
  titl: string = 'Google maps.';
  lat: number = 13.082680199999999;
  lng: number = 80.2707184;

  public navIsFixed: boolean = false;
  private shown: string = 'TAB1';
  clicked(event) {
  event.target.classList.add('class3'); // To ADD
  event.target.classList.remove('class1'); // To Remove
  event.target.classList.contains('class2'); // To check
  event.target.classList.toggle('class4'); // To toggle
}
  //Modal Pop up
   @ViewChild('autoShownModal') public autoShownModal:ModalDirective;
  public isModalShown:boolean = false;
 
  public showModal():void {
    this.isModalShown = true;
  }
 
  public hideModal():void {
    this.autoShownModal.hide();
  }
 
  public onHidden():void {
    this.isModalShown = false;
  }
  //Modal Ends
  public oneAtATime: boolean = true;
  // array of all items to be paged
    private allItems: any[];
 
    // pager object
    pager: any = {};
 
    // paged items
    pagedItems: any[];
 
    ngOnInit() {
      if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition(this.setPosition.bind(this));
    };
    
        // get dummy data
       this.newService.DummyData().subscribe(
          data => {
                // set items to json response
                this.allItems = data;
                console.log(data)
 
                // initialize to page 1
                this.setPage(1);
            }
       )
    }
    
    setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.newService.getPager(this.allItems.length, page);
 
        // get current page of items
        this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
  //End of Page Service
  onSubmit = function(user){
          console.log(user);
        }
     items:Array<any> = [];   
  constructor(private newService: MyDataService) {
    
    this.items = [
      { name: 'assets/img/pic1.jpg' },
      { name: 'assets/img/pic2.jpg' },
      { name: 'assets/img/pic3.jpg' },
      { name: 'assets/img/pic4.jpg' },
      { name: 'assets/img/pic5.jpg' },
      { name: 'assets/img/pic6.jpg' },
    ]
  }
  
  title = 'aa';
  object = {id: '1', name: 'shanth'};
  arr = ['123','456','678'];
  IsTrue = false;
  myName = 'shanth';

  images = ['Java','Css','Html'];
  newItem = "";
  pushItem = function(){
    if(this.newItem != ""){
      this.images.push(this.newItem);
      this.newItem = "";
    }
  }
  removeItem = function(index){
    this.images.splice(index,1);
  }

  @HostListener('window:scroll', ['$event']) onScrollEvent($event){
  let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (number > 100) {
      this.navIsFixed = true;
    }
    else if (this.navIsFixed && number < 10) {
      this.navIsFixed = false;
    }
} 
}

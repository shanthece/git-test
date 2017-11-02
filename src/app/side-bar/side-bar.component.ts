import { Component, OnInit, ViewChild, EventEmitter  } from '@angular/core';
import {Renderer} from '@angular/core';




@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  mtitle:string;
  userTypeSelect(event:any){
        event.preventDefault()
        this.render.setElementClass(event.target,"active",false);
      }
 //Menu
 private menuItemsArray: any[] = [ 
       
       {"title":"Home","link":"/Home"},
       {"title":"Feautures","link":"/Check"},
       {"title":"Login","link":"/phone"},
       {"title":"Hire Me","link":"/hireme"},
       {"title":"About Me","link":"/documents"},
       
       /*{"title":"Home and Kitchen","link":"#",
       "subItems":[
                   {"title":"Furniture","link":"#"},
                   {"title":"Cookware","link":"#"},
                  ]
       },
       {"title":"Car and Bike Accessories","link":"#",
        "subItems":[
                     {"title":"Tyres and Alloys","link":"#"},
                     {"title":"Comfort and Safety","link":"#"},
                    ]
       },*/
 ];

  public onMenuClose(){
    console.log("menu closed");
  }
  public onMenuOpen(){
    console.log("menu Opened");
  }
  private onItemSelect(item:any){
    
    this.defaulttitle = false;
    this.mtitle= item.title;
    console.log(item.title);
  }
defaulttitle = true;

  constructor(private render:Renderer) {
  

    

  }
  


  ngOnInit() {
    
   
  }
  
  submit(){

    alert('submitted');
  }

}

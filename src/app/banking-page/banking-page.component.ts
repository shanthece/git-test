import { Component, OnInit } from '@angular/core';
import {Renderer} from '@angular/core';
import { MyDataService } from './../my-data.service';


@Component({
  selector: 'app-banking-page',
  templateUrl: './banking-page.component.html',
  styleUrls: ['./banking-page.component.css']
})
export class BankingPageComponent implements OnInit {
    hightlightStatus: Array<boolean> = [];
    menus = ["pineapples", "apples", "tomatoes", "bread"];

    highlightItem(event) {
        event.target.setAttribute("data-selected", "true");
   }

   isHighlighted(event) {
       return event.target.getAttribute("data-selected") == "true";
    }
     userTypeSelect(event:any){
        event.preventDefault()
        this.render.setElementClass(event.target,"active",false);
      }
  constructor(private newService: MyDataService, private render:Renderer) { 

  }
  
  ninjas:{};
  
  ngOnInit() {
    this.newService.getData().subscribe(
      //(data) => this.ninjas = data,
      data => console.log(data.value.joke)
    )
  }

}

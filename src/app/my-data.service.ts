import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import * as _ from 'underscore';
import 'rxjs/add/operator/map';

@Injectable()
export class MyDataService {
 
  
  constructor(private http: Http) { 
    
  }

  get windowRef() {
    return window
  }
  
  fetchData(){
    return this.http.get('https://ng-ang.firebaseio.com/.json').map(
      (res) => res.json()
    )
    
  }
  getData(){
    return this.http.get('http://api.icndb.com/jokes/random').map(
      (res) => res.json()
    )
    
  }
  DummyData(){
    return this.http.get('/assets/data/dummy-data.json').map(
      (res) => res.json()
    )
    
  }
 
  obj = {
    id: '1',
    name: 'shanth',
    email: 'shanthece@gmail.com'
  }
  success(){
    return "Successful";
  }

//Page Service
 getPager(totalItems: number, currentPage: number = 1, pageSize: number = 10) {
        // calculate total pages
        let totalPages = Math.ceil(totalItems / pageSize);

        let startPage: number, endPage: number;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        } else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        // calculate start and end item indexes
        let startIndex = (currentPage - 1) * pageSize;
        let endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        // create an array of pages to ng-repeat in the pager control
        let pages = _.range(startPage, endPage + 1);

        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }
//Pager Service Ends
}


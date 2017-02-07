import { Component, OnInit } from '@angular/core';
import { DataService } from './services/get_sample_data';
@Component({
  selector: 'my-app',
  styles: [`
    .cursorhover:hover {
      cursor:pointer;
    }
  `],
  template: `
    <div class="jumbotron text-center">
      <h1>hello!</h1>
    </div>
    <search-bar [data]="data"></search-bar>
<table class="table table-bordered">
    <thead>
      <tr>
        <th class="cursorhover" (click)="sortId()">Id</th>
        <th>Name</th>
        <th class="cursorhover" (click)="sortPantoneValue()">Pantone Value</th>
        <th class="cursorhover" (click)="sortYear()">Year</th>
      </tr>
    </thead>
<tbody *ngFor="let single of data">
    <tr>
      <td>{{single.id}}</td>
      <td>{{single.name}}</td>
      <td>{{single.pantone_value}}</td>
      <td>{{single.year}}</td>
    </tr>
</tbody>
</table>
  `
})
export class AppComponent {
  data: any = [];
  newArray: any = []; //creating new Array because I try to stay away from mutating the response
  counter: number = 0;
  ascending: boolean = true;
  unsortedArray: any;
	testArray: any;
  constructor(private dataService: DataService){

  }
  ngOnInit(){
    this.dataService.getData().subscribe((data) => {
      this.data = data.data;
    });
  }
	sortYear(){
		this.data.sort((a,b) => {
      console.log("a.year is: " + a.year);
      console.log("b.year is: " + b.year);
			return parseFloat(a.year) + parseFloat(b.year);
		});
	}
	sortId(){
    this.data.sort((a,b) => {
      return parseFloat(a.id) + parseFloat(b.id);
    });
	}
  sortPantoneValue(){
    // sort by name
    this.data.sort((a,b) => {
      var valueA = a.pantone_value.toUpperCase(); // ignore upper and lowercase
      var valueB = b.pantone_value.toUpperCase(); // ignore upper and lowercase
      if (valueA < valueB) {
        if (valueA > valueB) {
          return -1;
        }
        if (valueA < valueB) {
          return 1;
        }
    } else if(valueA > valueB){
        if (valueA < valueB) {
          return -1;
        }
        if (valueA > valueB) {
          return 1;
        }
    }
      // names must be equal
      return 0;
    });
  }
}

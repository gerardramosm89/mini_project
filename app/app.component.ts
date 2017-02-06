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
        <th>Id</th>
        <th>Name</th>
        <th class="cursorhover" (click)="sortThis()">Pantone Value</th>
        <th>Year</th>
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
  constructor(private dataService: DataService){

  }
  ngOnInit(){
    this.dataService.getData().subscribe((data) => {
      this.data = data.data;
      //console.log(this.data);
    });
  }

  sortThis(){
    this.newArray = [];
    this.counter = 0;
    this.ascending = !this.ascending;
    this.data.map((data) => {
      console.log(data);
    });
  }
}

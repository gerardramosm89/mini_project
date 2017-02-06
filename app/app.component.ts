import { Component, OnInit } from '@angular/core';
import { DataService } from './services/get_sample_data';
@Component({
  selector: 'my-app',
  styles: [`

  `],
  template: `
    <div class="jumbotron text-center">
      <h1>hello!</h1>
    </div>
<table class="table table-bordered">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Pantone Value</th>
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
  constructor(private dataService: DataService){

  }
  ngOnInit(){
    this.dataService.getData().subscribe((data) => {
      this.data = data.data;
      console.log(this.data);
    });
  }
}

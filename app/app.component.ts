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
    <div *ngFor="let single of data">
      {{ single.id }}
      {{ single.name }}
      {{ single.pantone_value }}
      {{ single.year }}
    </div>
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

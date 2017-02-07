import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'search-bar',
  template:`
  <div class="col-xs-6 col-xs-offset-3" style="margin-bottom:30px">
    <form [formGroup]="myForm" class="input-group" (ngSubmit)="searchClick()">
      <input type="text" placeholder="Enter a search term" class="form-control" formControlName="searchTerm">
      <span class="input-group-btn">
        <button class="btn btn-info" [disabled]="!myForm.valid">Search</button>
      </span>
    </form>
  </div>
  <div *ngIf="foundArraybool">
    <div *ngIf="myForm.valid">
      <table class="table table-bordered">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Pantone Value</th>
              <th>Year</th>
            </tr>
          </thead>
      <tbody *ngFor="let single of foundArray">
          <tr>
            <td>{{single.id}}</td>
            <td>{{single.name}}</td>
            <td>{{single.pantone_value}}</td>
            <td>{{single.year}}</td>
          </tr>
      </tbody>
      </table>
    </div>
  </div>
  `
})

export class SearchComponent{
  myForm: FormGroup;
  //Taking in data from the parent component
  @Input() data: any;
  foundArray: any = null;
  searchTerm: any;
  n: number;
  currentName: any;
  foundArraybool: boolean;
  constructor(){
    this.myForm = new FormGroup({
      'searchTerm': new FormControl('', Validators.required)
    });
  }
  searchClick(){
    this.foundArray = [];

    this.searchTerm = this.myForm.value.searchTerm;
    if (this.foundArray = []){
      this.foundArraybool = false;
    }
    for (let i = 0;i < this.data.length;i++){
      this.currentName = this.data[i].pantone_value;
      this.n = this.currentName.indexOf(this.searchTerm);
      //decided to go with indexOf, because if we get back -1 it means we did not find an instance of that word
      if (this.n != -1){
        this.foundArray.push(this.data[i]);
        console.log(this.foundArray);
        this.foundArraybool = true;
      }
    };
    for (let i = 0;i < this.data.length;i++){
      this.currentName = this.data[i].name;
      this.n = this.currentName.indexOf(this.searchTerm);
      //decided to go with indexOf, because if we get back -1 it means we did not find an instance of that word
      if (this.n != -1){
        this.foundArray.push(this.data[i]);
        console.log(this.foundArray);
        this.foundArraybool = true;
      }
    };
    for (let i = 0;i < this.data.length;i++){
      this.currentName = JSON.stringify(this.data[i].year); //Had to stringify this to match the term below
      this.n = this.currentName.indexOf(this.searchTerm);
      //decided to go with indexOf, because if we get back -1 it means we did not find an instance of that word
      if (this.n != -1){
        this.foundArray.push(this.data[i]);
        console.log(this.foundArray);
        this.foundArraybool = true;
      }
    };
  }
  ngOnInit(){

  }

}

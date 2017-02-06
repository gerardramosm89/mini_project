import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
//Just calling in DataService for fun :)
export class DataService {
  data: any;
  API_URL = "https://reqres.in/api/unknown";
  constructor(private http: Http){

  }
  ngOnInit(){
    //going with template strings for ease
  }

  getData(): Observable<any>{
    return this.http.get(`${this.API_URL}`)
      .map((res: Response) => this.data = res.json());
  }
}

import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
@Injectable()
//Just calling it DataService for fun :)
export class DataService {
  data: any;
  API_URL = "https://reqres.in/api/unknown"; //using test dummy API, none were provided so I assumed I could use this
  constructor(private http: Http){

  }
  ngOnInit(){
  }

  getData(): Observable<any>{
    return this.http.get(`${this.API_URL}`)
      .map((res: Response) => this.data = res.json());
  }
}

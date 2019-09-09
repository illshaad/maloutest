import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators/';

@Injectable({
    providedIn :'root'
})

export class DataService {
    constructor(private http : HttpClient) {}
        getData(){
            return this.http.get("http://localhost:3000/paris")
            .pipe(map(response => response))
        }
        getData_two(){
            return this.http.get("http://localhost:3000/rome")
            .pipe(map(response => response))
        }
        getData_three(){
            return this.http.get("http://localhost:3000/barcelone")
            .pipe(map(response => response))
        }
       
}

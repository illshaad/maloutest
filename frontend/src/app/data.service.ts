import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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
        return this.http.get("http://localhost:3000/madrid")
        .pipe(map(response => response))
    }
     saveData(){
        return this.http.post("http://localhost:3000/save",{
            headers : new HttpHeaders({
                'Content-Type' : 'application/json',
            }),
        })
    }
     // saveData(totalResults){
    //    const obj = {
    //        totalResults
    //    };
    //    console.log(obj);
    //    this.http.post('http://localhost:3000/save',obj)
    // }
}



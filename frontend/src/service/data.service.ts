import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators/';



@Injectable({
    providedIn :'root'
})

export class DataService {
    constructor(private http : HttpClient) {}

    //Refactorisation //
    // getDataAll(){
    //     return this.http.get("http://localhost:3000/alldata")
    //     .pipe(map(response => response))
    // }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    
    getDataParis(){
        return this.http.get("http://localhost:3000/paris")
        .pipe(map(response => response))
    };
   
    getDataRome(){
        return this.http.get("http://localhost:3000/rome")
        .pipe(map(response => response))
    }
    getDataMadrid(){
        return this.http.get("http://localhost:3000/madrid")
        .pipe(map(response => response))
    }
     saveData(sendDataFromBack){
        return this.http.post("http://localhost:3000/save",{
            headers : new HttpHeaders({
                'Content-Type' : 'application/json',
            }),
            body : sendDataFromBack
        })
    }
}



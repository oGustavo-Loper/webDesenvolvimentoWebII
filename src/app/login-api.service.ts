import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "./login";

const httpOptions = { 
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

@Injectable({
    providedIn: "root"
})

export class LoginApiService{
    baseAPI = "http://localhost:3000/login";

    constructor(private http: HttpClient) { }

    getInstance(){
        return this.http;
    }
    loguin(login: Login): Observable<Login>{
        return this.http.post<Login>(this.baseAPI, login, httpOptions);
    }
}
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor( private http: HttpClient) { }

  public getApp(): Observable<any>{
    return this.http.get("https://od-api.oxforddictionaries.com/api/v2");
  }


}

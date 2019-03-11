import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor(private http: HttpClient) {

  }

  getData(): Observable<any> {
    return this.http.get<any>('http://localhost:4200/contact');
  }
}

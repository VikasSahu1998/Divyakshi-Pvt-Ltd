import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  
  PostContact(data: any) {
    return this.http.post("https://divyakshi-41388-default-rtdb.firebaseio.com/data.json/", data);
  }
  PostJob(data: any) {
    return this.http.post("https://divyakshi-41388-default-rtdb.firebaseio.com/Job.json/", data);
  }
}

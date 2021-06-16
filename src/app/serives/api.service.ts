import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  getRequest(url){
    return this.http.get(environment.api_url+url);
  }

  postRequest(url, data){
    return this.http.post(environment.api_url+url, data);
  }

  putRequest(url, data){
    return this.http.put(environment.api_url+url, data);
  }
  deleteRequest(url){
    return this.http.delete(environment.api_url+url);
  }

}

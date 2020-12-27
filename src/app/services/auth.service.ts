import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl;
  constructor(public httpClient: HttpClient) { }
  loginService(data) {
    const url = this.apiUrl + '';
    return this.httpClient.post(url, data)
  }
  registerServices(data) {
    const url = this.apiUrl+ '';
    return this.httpClient.post(url, data)
  }
}

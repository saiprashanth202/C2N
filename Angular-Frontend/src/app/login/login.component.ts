import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Http, Response } from '@angular/http';
import { HttpModule } from '@angular/http';

import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  
  @Injectable()
export class LoginComponent  {

   constructor(private http: Http) { }

  login(data: any): Observable<any> {
    return this.http.post(environment.ENDPOINT_URL + 'login', data, {})
      .map((response: Response) => response);
  }
  
 

}

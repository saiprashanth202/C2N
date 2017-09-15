import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

@Injectable()
export class AppService {

  constructor(private http: Http) { }

  login(data: any): Observable<any> {
    return this.http.post(environment.ENDPOINT_URL + 'login', data, {})
      .map((response: Response) => response);
  }

}
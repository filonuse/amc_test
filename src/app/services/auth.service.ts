import {Injectable} from '@angular/core';
import {HttpManagerService} from './http-manager.service';
import {AUTH_API} from '../config/auth.api.config';
import {Observable} from 'rxjs';

@Injectable()

export class AuthService {
  constructor(private http: HttpManagerService) {
  }

  public logIn(loginData): Observable<any> {
    return this.http.postRequest(AUTH_API.logIn, loginData, true);
  }
}

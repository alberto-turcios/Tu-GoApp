import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, throwError } from 'rxjs';
import { api_produccion} from '../../environments/environment';
import { RegisterResponse, Register } from '../models/register.interface';
import {catchError} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  stringJson: any;

  constructor(private http: HttpClient, private router: Router) { }

  register(authData: Register):Observable<RegisterResponse | void> {
    return this.http
    .post<RegisterResponse>(`${api_produccion.API_URL}auth/register`, authData)
    .pipe(
      map((res: RegisterResponse) =>{
        //save token
        console.log("res =>" + res);
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }

  private handlerError(err: { message: any; }): Observable<never> {
    let errorMessage = 'An errror occured retrienving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    console.log("error" + errorMessage);
    return throwError(errorMessage);
  }
}

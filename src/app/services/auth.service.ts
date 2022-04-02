import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, throwError } from 'rxjs';
import { api_produccion} from '../../environments/environment';
import { UserResponse, User } from '../models/user.interface';
import {catchError} from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

const helper = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient, private router: Router) {
    this.checkToken();
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(authData: User):Observable<UserResponse | void> {
    return this.http
    .post<UserResponse>(`${api_produccion.API_URL}auth/login`, authData)
    .pipe(
      map((res: UserResponse) =>{
        //save token
        this.saveToken(res.token);
        this.loggedIn.next(true);
        return res;
      }),
      catchError((err) => this.handlerError(err))
    );
  }


  logout():void{
    localStorage.removeItem('login-token');
    this.loggedIn.next(false);
    this.router.navigate(['']);
  }

  private checkToken(): void{
    let userToken = localStorage.getItem('login-token') as string;
    const isExpired = helper.isTokenExpired(userToken);
    if(isExpired) {
      this.logout();
    }else{
      this.loggedIn.next(true);
    }
  }

  private saveToken(token:string):void{
    localStorage.setItem('login-token', token);
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

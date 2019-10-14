import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

 

  public resetPassword(email): Observable<any> 
  {  return this.http.get(environment.baseUrl + "authenticate/reset-password/" + email);}

  public resetChangePassword(token,obj):Observable<any>
  {return this.http.post(environment.baseUrl + "authenticate/forgot-password/"+token,obj)}



  public tokenChecker(token): Observable<any> 
  { return this.http.get(environment.baseUrl + "authenticate/token-check/" + token); }


  public changePassword(obj): Observable<any> 
  { return this.http.post(environment.baseUrl + "authenticate/change-password", obj); }


  // public resetChecker(token): Observable<any> {
  //   return this.http.get(environment.baseUrl + "authenticate/changepassword/" + token)
  // }

 
}

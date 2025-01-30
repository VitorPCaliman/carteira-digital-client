import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:8080/auth"

  constructor(private httpClient: HttpClient) { }

  login(email: string, senha: string){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/login", { email, senha }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("auth-name", value.name)
      })
    )
  }

  signup(nome: string, cpf: string, contaOrigem: string, email: string, senha: string,   ){
    return this.httpClient.post<LoginResponse>(this.apiUrl + "/register", { nome, email, senha, cpf, contaOrigem }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("auth-name", value.name)
      })
    )
  }
}
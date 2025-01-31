import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, tap } from 'rxjs';
import { LoginResponse } from '../types/login-response.type';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiUrl: string = "http://localhost:8080"
  authRoute: string = "http://localhost:8080/auth"
  userRoute: string = "http://localhost:8080/usuarios"

  constructor(private httpClient: HttpClient) { }

  login(email: string, senha: string){
    return this.httpClient.post<LoginResponse>(this.authRoute + "/login", { email, senha }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("auth-name", value.name)
      })
    )
  }

  signup(nome: string, cpf: string, contaOrigem: string, email: string, senha: string ){
    return this.httpClient.post<LoginResponse>(this.authRoute + "/register", { nome, email, senha, cpf, contaOrigem }).pipe(
      tap((value) => {
        sessionStorage.setItem("auth-token", value.token)
        sessionStorage.setItem("auth-name", value.name)
      })
    )
  }

  getUsuarioByEmail(email: string): Observable<Usuario> {
    return this.httpClient.get<Usuario>(`${this.userRoute}/email/${email}`, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
      withCredentials: true 
    });
  }
}
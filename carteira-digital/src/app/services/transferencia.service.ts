import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from '../models/transferencia';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private apiUrl = 'http://localhost:8080/transferencias'; // Ajuste para sua URL da API

  constructor(private httpClient: HttpClient) {}

  agendarTransferencia(transferencia: Transferencia): Observable<Transferencia> {
    return this.httpClient.post<Transferencia>(`${this.apiUrl}`, transferencia);
  }

  consultarExtrato(contaOrigem: string): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(`${this.apiUrl}/extrato/${contaOrigem}`);
  }
  
}

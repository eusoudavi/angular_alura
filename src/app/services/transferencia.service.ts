import { Transferencia } from './../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  private listaTansferencia: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaTansferencia = [];
  }

  get listaTransferencia() {
    return this.listaTansferencia;
  }

  // MÉTODO GET - LISTAR TODAS AS TRANSFERENCIAS
  todas(): Observable<Transferencia[]> {
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  // MÉTODO POST - LISTAR TODAS AS TRANSFERENCIAS
  adicionar(transferencia: Transferencia): Observable<Transferencia> {
    this.hidratar(transferencia);
    //this.listaTansferencia.push(transferencia);
     return this.httpClient.post<Transferencia>(this.url,transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

}

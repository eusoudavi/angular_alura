import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private listaTansferencia: any[];

  constructor() {
    this.listaTansferencia = [];
  }

  get listaTransferencia() {
    return this.listaTansferencia;
  }

  adicionar(transferencia: any) {
    this.hidratar(transferencia);
    this.listaTansferencia.push(transferencia);
  }

  private hidratar(transferencia: any) {
    transferencia.data = new Date();
  }

}

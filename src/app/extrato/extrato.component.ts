import { TransferenciaService } from './../services/transferencia.service';
import { Component, Input } from '@angular/core';
import { Transferencia } from '../models/transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent {

  @Input() transferencias: any[] = [];

  constructor(private service: TransferenciaService){
  }

  ngOnInit(){
    //this.transferencias = this.service.listaTransferencia;
    this.service.todas().subscribe(
      (transferencias: Transferencia[]) => {
        console.table(transferencias)
        this.transferencias = transferencias;
      }
    )
  }

}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  valor: number | undefined;
  destino: number | undefined;


  transferir($event: any){
    console.log($event);
    this.valor = $event.valor;
    this.destino = $event.destino;
  }
}

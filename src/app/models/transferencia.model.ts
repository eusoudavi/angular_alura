export interface Transferencia {
  //id: string;
  id?: number | string;
  valor: number;
  destino: number | string;
  data?: Date;
}

import { Timestamp } from 'rxjs/internal/operators/timestamp';


export interface Mensaje {
  nombre: string;
  mensaje: string;
  fecha?: number;
  uid?: string;
  fecha_enviado: string;
}

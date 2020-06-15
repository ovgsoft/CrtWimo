import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Mensaje } from '../interface/mensaje.interface';
import { map } from 'rxjs/operators';
import { Timestamp } from 'rxjs/internal/operators/timestamp';
@Injectable()
export class ChatService {

  private itemCollections: AngularFirestoreCollection<Mensaje>;
  public chats: Mensaje[] = [];
  public usuario: any = {};


  constructor(private afs: AngularFirestore) { }
  cargarMensajes() {

    this.itemCollections = this.afs.collection<Mensaje>('chats', ref => ref.orderBy('fecha', 'desc')
      .limit(5));

    return this.itemCollections.valueChanges().pipe(
      map((mensajes: Mensaje[]) => {
        console.log(mensajes);

        this.chats = [];

        for (let mensaje of mensajes) {
          this.chats.unshift(mensaje);
        }

        return this.chats;
      }));


  }
  agregarMensaje(texto: string) {

    // TODO falta el UID del usuario
    let mensaje: Mensaje = {
      nombre: 'Sistema',
      mensaje: texto,
      fecha: new Date().getTime(),
      uid: new Date().toLocaleTimeString(),
      fecha_enviado: new Date().toLocaleDateString()

    };

    return this.itemCollections.add(mensaje);

  }
}

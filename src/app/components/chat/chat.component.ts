import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../service/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['../../login/login.component.css']
})
export class ChatComponent implements OnInit {

  mensaje = null;
  elemento: any;

  constructor(public _cs: ChatService) {
    this._cs.cargarMensajes()
      .subscribe(() => {

        setTimeout(() => {
          this.elemento.scrollTop = this.elemento.scrollHeight;
        }, 20);


      });
  }


  enviar_mensaje() {
    console.log(this.mensaje);

    if (this.mensaje.length === 0) {
      return;
    }

    this._cs.agregarMensaje(this.mensaje)
      .then(() => this.mensaje = '')
      .catch((err) => console.error('Error al enviar', err));



  }

  ngOnInit() {
    // this._cs.cargarMensajes();
    this.elemento = document.getElementById('app-mensajes');

  }
}
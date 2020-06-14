import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import swal from 'sweetalert2';


@Injectable()
export class UsuarioService {

  URL = "http://localhost/apiphp/";

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    return this.http.get(`${this.URL}ObtenerUsuarios.php`);
  }
  obtenerSuma() {
    return this.http.get(`${this.URL}ObtenerSuma.php`);
  }

  obtenerProductos() {
    return this.http.get(`${this.URL}ObtenerProductos.php`);
  }

  altaUsuario(usuario) {
    return this.http.post(`${this.URL}AltaUsuario.php`, JSON.stringify(usuario));
  }

  bajaUsuario(id: number) {
    return this.http.get(`${this.URL}BajaUsuario.php?id=${id}`);
  }

  seleccionarUsuario(id: number) {
    return this.http.get(`${this.URL}SeleccionarUsuario.php?id=${id}`);
  }

  editarUsuario(usuario) {
    return this.http.post(`${this.URL}EditarUsuario.php`, JSON.stringify(usuario));
  }
}

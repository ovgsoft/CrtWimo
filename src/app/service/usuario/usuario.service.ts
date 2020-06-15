import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class UsuarioService {

  URL = "https://ovgsoft.com/android/apiwimo/";

  constructor(private http: HttpClient) { }

  obtenerUsuarios() {
    return this.http.get(`${this.URL}ObtenerUsuarios.php`);
  }
  obtenerSuma() {
    return this.http.get(`${this.URL}ObtenerSuma.php`);
  }

  obtenerGraficas() {
    return this.http.get(`${this.URL}ObtenerGrafica.php`);
  }
  obtenerCategorias() {
    return this.http.get(`${this.URL}Categorias.php`);
  }

  obtenerProductos() {
    return this.http.get(`${this.URL}ObtenerProductos.php`);
  }

  altaUsuario(usuario) {
    return this.http.post(`${this.URL}AltaUsuario.php`, JSON.stringify(usuario));
  }
  altaProducto(producto) {
    return this.http.post(`${this.URL}AltaProducto.php`, JSON.stringify(producto));
  }

  bajaUsuario(id: number) {
    return this.http.get(`${this.URL}BajaUsuario.php?id=${id}`);
  }
  bajaProducto(id: number) {
    return this.http.get(`${this.URL}BajaProducto.php?id=${id}`);
  }

  seleccionarUsuario(id: number) {
    return this.http.get(`${this.URL}SeleccionarUsuario.php?id=${id}`);
  }
  seleccionarProducto(id: number) {
    return this.http.get(`${this.URL}SeleccionarProductos.php?id=${id}`);
  }


  editarUsuario(usuario) {
    return this.http.post(`${this.URL}EditarUsuario.php`, JSON.stringify(usuario));
  }

  editarProducto(prosucto) {
    return this.http.post(`${this.URL}EditarProducto.php`, JSON.stringify(prosucto));
  }
}

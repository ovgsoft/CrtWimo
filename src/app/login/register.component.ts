import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../service/usuario/usuario.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {
  usuarios = null;
  productos = null;
  sumas = null;
  alerta: string;
  producto = {
    id: null,
    codigo: null,
    descripcion: null,
    stock: null,
    imagen: null,
    precio_compra: null,
    precio_venta: null,
    ventas: null,
    id_categoria: null,
    fecha: null
  };

  suma = {
    total: null
  };
  usuario = {
    id: null,
    nombre: null,
    documento: null,
    email: null,
    telefono: null,
    direccion: null,
    fecha_nacimiento: null,
    compras: null,
    ultima_compra: null,
    fecha: null

  };
  constructor(private us: UsuarioService) { }
  ngOnInit() {
    this.obtenerUsuarios();
    // this.obtenerSuma();
  }

  obtenerUsuarios() {
    this.us.obtenerUsuarios().subscribe(
      result => this.usuarios = result
    );
    this.obtenerSuma();
  }

  obtenerSuma() {
    this.us.obtenerSuma().subscribe(
      result => this.sumas = result
    );

  }


  obtenerProductos() {
    this.us.obtenerProductos().subscribe(
      result => this.productos = result

    );
    console.log(this.productos);
  }
  altaUsuario() {
    if (this.usuario.nombre == null) {
      swal.fire('Alerta del sistema', 'No debe dejar ningun campo requerido en blanco', 'error');

    } else {


      this.us.altaUsuario(this.usuario).subscribe(
        datos => {
          if (datos['resultado'] == 'OK') {
            this.obtenerUsuarios();
          }
        }
      );
    }
  }

  bajaUsuario(id) {


    this.us.bajaUsuario(id).subscribe(
      datos => {
        if (datos['resultado'] == 'OK') {
          this.obtenerUsuarios();
        }
      }
    );
  }

  editarUsuario() {

    if (this.usuario.nombre == null || this.usuario.email == null || this.usuario.telefono == null || this.usuario.direccion == null) {

      swal.fire('Alerta del sistema', 'Debe seleccionar un registro', 'error');

    } else {


      this.us.editarUsuario(this.usuario).subscribe(
        datos => {
          if (datos['resultado'] == 'OK') {
            this.obtenerUsuarios();
          }
        }
      );
    }
  }

  seleccionarUsuario(id) {
    this.us.seleccionarUsuario(id).subscribe(
      result => this.usuario = result[0]
    );
  }

  hayRegistros() {
    if (this.usuarios == null) {
      return false;
    } else {
      return true;
    }
  }
  hayProductos() {
    if (this.productos == null) {
      return false;
    } else {
      return true;
    }
  }
}

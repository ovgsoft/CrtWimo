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
  categorias = null;

  categ = {
    id: null,
    categoria: null,
    fecha: null
  };

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
    fecha: null,
    costoAlmacen: null,
    montoVenta: null,
    ganancia: null
  };

  suma = {
    noProducto: null,
    ventas: null,
    stock: null,
    costoAlmacen: null,
    montoVenta: null,
    ganancia: null
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
    this.obtenerProductos();
    this.obtenerSuma();
    this.obtenerCategorias();
    this.graficas();
  }

  obtenerUsuarios() {
    this.us.obtenerUsuarios().subscribe(
      result => this.usuarios = result
    );
  }

  obtenerSuma() {
    this.us.obtenerSuma().subscribe(
      result => this.sumas = result
    );



  }

  obtenerCategorias() {
    this.us.obtenerCategorias().subscribe(
      result => this.categorias = result
    );

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

  // Productos
  obtenerProductos() {
    this.us.obtenerProductos().subscribe(
      result => this.productos = result

    );


  }
  altaProducto() {
    if (this.producto.codigo == null) {
      swal.fire('Alerta del sistema', 'No debe dejar ningun campo requerido en blanco', 'error');

    } else {


      this.us.altaProducto(this.productos).subscribe(
        datos => {
          if (datos['resultado'] == 'OK') {
            this.obtenerProductos();
          }
        }
      );
    }
  }

  bajaProducto(id) {


    this.us.bajaProducto(id).subscribe(
      datos => {
        if (datos['resultado'] == 'OK') {
          this.obtenerProductos();
        }
      }
    );
  }
  editarProducto() {

    // tslint:disable-next-line: max-line-length
    if (this.producto.codigo == null ||
      this.producto.descripcion == null ||
      this.producto.imagen == null ||
      this.producto.precio_venta == null) {

      swal.fire('Alerta del sistema', 'Debe seleccionar un producto', 'error');

    } else {

      // console.log(this.producto);

      this.us.editarProducto(this.producto).subscribe(
        datos => {
          if (datos['resultado'] == 'OK') {
            this.obtenerProductos();
            this.obtenerSuma();
          }
        }
      );
    }
  }

  seleccionarProducto(id) {
    this.us.seleccionarProducto(id).subscribe(
      result => this.producto = result[0]
    );
    localStorage.setItem('stock_', this.producto.stock);
    localStorage.setItem('venta_', this.producto.ventas);
    localStorage.setItem('producto', this.producto.descripcion);
    // this.us.datos();

  }
  hayProductos() {
    if (this.productos == null) {
      return false;
    } else {
      return true;
    }
  }


  graficas() {
    this.us.obtenerGraficas().subscribe(
      result => this.sumas = result
    );



  }



}

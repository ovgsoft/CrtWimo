import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/service/usuario/usuario.service';

@Component({
  selector: 'app-barras',
  templateUrl: './barras.component.html',
  styles: []
})
export class BarrasComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  sumas = null;

  suma = {
    ventas: null,
    stock: null,
    costoAlmacen: null,
    montoVenta: null,
    ganancia: null
  };

  // public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010'];
  public barChartLabels = null;
  // public barChartType: string = 'bar';
  // public barChartLegend: boolean = true;
  public barChartData = null;
  // 
  // public barChartData: any[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Tamales' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Chorizo' }
  // ];

  constructor(private us: UsuarioService) { }
  ngOnInit() {


    this.datos();


  }

  obtenerSuuma() {
    this.us.obtenerGraficas().subscribe(
      result => this.sumas = result
    );

  }

  graficas() {
    this.us.obtenerGraficas().subscribe(
      // result => this.sumas = result
      datos => {
        this.obtenerSuuma();
        this.suma = datos[0];
        localStorage.setItem('stock', this.suma.stock);
        localStorage.setItem('venta', this.suma.ventas);
      }
    );





  }

  datos() {
    if (localStorage.getItem('producto') == null) {
      this.graficas();
      this.barChartLabels = ['Ventas', 'Stock'];

      this.barChartData = [{
        data: [localStorage.getItem('venta'), localStorage.getItem('stock')],
        label: 'Venstas VS Stock'
      }
      ];
    } else {
      // localStorage.getItem('producto')
      this.barChartLabels = ['Ventas', 'Stock'];
      this.barChartData = [{
        data: [localStorage.getItem('venta_'), localStorage.getItem('stock_')],
        label: 'Venstas VS Stock'
      }
      ];
    }

  }
  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }



}

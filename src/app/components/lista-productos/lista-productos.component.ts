import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { IProducto } from '../../models/productos.interface';
import { IResponseProductos } from '../../models/response.productos';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos : any = [];

  constructor(private _apiService:ProductoService) { }

  ngOnInit(): void {
      this.cargarProductos();
  }


  cargarProductos() {
    this._apiService.getProductos().subscribe(data => {
      if(data.codigoRetorno === '0001') {
        this.productos = data.data;
      }
    });
  }
}

import { Injectable } from '@angular/core';
import {ProductosSucursal} from '../models/productos.sucursales.model'
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoSucursalesService {
  public url : String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');
  public token;
  public identidad;

  constructor(public _http: HttpClient) { }

  EnviarProducto(idSurcursal, modeloProducto: ProductosSucursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )
    let parametros = JSON.stringify(modeloProducto);
    return this._http.put(this.url+'/EnviarProductosSurcursales/'+ idSurcursal, parametros, { headers: headersToken })
  }

  ObtenerProductoSucursal(idSurcursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )
    return this._http.get(this.url+'/VerProductosPorSucursales/'+ idSurcursal, { headers: headersToken})
  }

  obtenerProductosSucursalesId(idProducto, token): Observable<any> {

    let headersToken = this.headersVariable.set('Authorization', token );
    return this._http.get(this.url + '/ProductosSurcursalesId/'+idProducto, { headers: headersToken})
  }

  VentaSimulada( modeloProductoSucursales: ProductosSucursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloProductoSucursales);


    return this._http.put(this.url + '/VentaSimuladaSurcursal/' + modeloProductoSucursales.idSurcursal, parametros, { headers: headersToken })
  }


  /*---------------------------*/

  IngresarProducto(modeloProducto: ProductosSucursal, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    let parametros = JSON.stringify(modeloProducto);

    return this._http.post(this.url + '/AgregarproductosEmpresas', parametros, { headers: headersToken })
  }

  obtenerProducto(token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token)
    return this._http.get(this.url + '/ProductosEmpresa',{ headers: headersToken })
  }

  eliminarProductos(idProducto, token): Observable<any>{
    let headersToken = this.headersVariable.set('Authorization', token);
    return this._http.delete(this.url + '/eliminarProductoEmpresa/'+ idProducto,{ headers: headersToken })
  }

  obtenerProductoId(idProducto, token): Observable<any> {
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url + '/ProductoId/'+ idProducto, {headers: headersToken})
  }

  editarProductos(modeloProductos: ProductosSucursal, token): Observable<any> {
    let parametros = JSON.stringify(modeloProductos);
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.put(this.url + '/EditarProductosEmpresas/'+ modeloProductos._id, parametros,{ headers: headersToken})

  }

}

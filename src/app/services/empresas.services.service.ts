import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Empresas } from '../models/empresas.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {
  public url: String = 'http://localhost:3000/api';
  public headersVariable = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(public _http: HttpClient) { }

  obtenerEmpresas(): Observable<any> {

    return this._http.get(this.url + '/verEmpresas', { headers: this.headersVariable })
  }

  agregarEmpresa(modeloEmpresas: Empresas): Observable<any> {
    let parametros = JSON.stringify(modeloEmpresas);

    return this._http.post(this.url + '/registrarEmpresa', parametros, {headers: this.headersVariable})
  }
}

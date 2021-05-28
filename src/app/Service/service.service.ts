import { Factura } from './../Modelo/Factura';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private http: HttpClient) {}

  Url = 'http://localhost:8080/facturas';

  getFactura() {
    return this.http.get<Factura[]>(this.Url + '/list');
  }

  createFactura(factura: Factura) {
    return this.http.post<Factura>(this.Url+'/ingresar', factura);
  }
}

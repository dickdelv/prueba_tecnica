import { Factura } from './../../Modelo/Factura';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {ServiceService} from '../../Service/service.service'


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  facturas:Factura[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit() {
  
    this.service.getFactura()
    .subscribe(data=>{
      this.facturas=data;

    })
  
  }



}

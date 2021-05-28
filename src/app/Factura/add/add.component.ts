import { Factura } from './../../Modelo/Factura';
import { ServiceService } from './../../Service/service.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})

export class AddComponent implements OnInit {

  factura:Factura=new Factura();
  constructor(private router:Router, private service:ServiceService) { }
    
  ngOnInit(){
  
  }

  Guardar(){
    this.service.createFactura(this.factura)
    .subscribe(data=>{
      alert("Factura Creada Con Exito");
      this.router.navigate(["listar"]);
    })
  }

}

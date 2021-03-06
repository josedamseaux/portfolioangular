import { InfoPaginaService } from './../../services/info-pagina.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent  {

  constructor(public _servicio: InfoPaginaService,
              private router: Router) { }


  buscarProducto(termino: String){

    if(termino.length < 1) {
      return;
    }


    this.router.navigate(['/search', termino]);
    
    console.log(termino);

  }



}
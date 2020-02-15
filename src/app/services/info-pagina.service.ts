import { infoPagina, infoEquipo } from './../interfaces/info-pagina.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  info: infoPagina = {};
  cargando = true;  
  equipo: any[] = [];

  constructor( private http: HttpClient) { 

  this.cargarInfo();

  this.cargarEquipo();

  }


private cargarInfo(){
  this.http.get('assets/data/data-pagina.json')
  .subscribe( (resp: infoPagina) => {
    
    this.info = resp;

    setTimeout(() => {
      this.cargando=false;

    }, 1500);

});
}

private cargarEquipo(){

  this.http.get('https://glitter-html.firebaseio.com/%20equipo.json')
  .subscribe( (resp: any[]) => {
    this.equipo = resp;
    setTimeout(() => {
      this.cargando=false;

    }, 1500);

});
}
}
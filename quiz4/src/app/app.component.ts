import { Component } from '@angular/core';

type RedSocial = {
  icono:string,
  nombre:string,
  descripcion:string,
  estado:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quiz4';

  redesSocialesList: RedSocial[] = [];

  constructor(){
    this.redesSocialesList.push({
      icono: "instagram",
      nombre: "Instagram",
      descripcion: "Texto",
      estado: false
    });
    this.redesSocialesList.push({
      icono: "twitter",
      nombre: "Twitter",
      descripcion: "Texto",
      estado: false
    });
    this.redesSocialesList.push({
      icono: "facebook-f",
      nombre: "Facebook",
      descripcion: "Texto",
      estado: false
    });
    this.redesSocialesList.push({
      icono: "pinterest-p",
      nombre: "Printerest",
      descripcion: "Texto",
      estado: false
    });
    this.redesSocialesList.push({
      icono: "google-plus",
      nombre: "Google",
      descripcion: "Texto",
      estado: false
    });
    this.redesSocialesList.push({
      icono: "github",
      nombre: "Github",
      descripcion: "Texto",
      estado: false
    });
  }

  ocultarRedSocial(redSocial: RedSocial){
    console.info(redSocial);
    redSocial.estado = !redSocial.estado;
  }

}

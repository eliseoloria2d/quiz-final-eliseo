import { Component } from '@angular/core';
import { trigger, transition, useAnimation } from '@angular/animations';
import { bounce } from 'ng-animate';

type RedSocial = {
  icono:string,
  nombre:string,
  descripcion:string,
  estado:boolean,
  animacion:boolean
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('hover', [transition('* => *', useAnimation(bounce))])
  ],
})
export class AppComponent {
  title = 'quiz4';
  bounce: any;

  redesSocialesList: RedSocial[] = [];

  constructor(){
    this.redesSocialesList.push({
      icono: "instagram",
      nombre: "Instagram",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      estado: false,
      animacion: true
    });
    this.redesSocialesList.push({
      icono: "twitter",
      nombre: "Twitter",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      estado: false,
      animacion: true
    });
    this.redesSocialesList.push({
      icono: "facebook-f",
      nombre: "Facebook",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      estado: false,
      animacion: true
    });
    this.redesSocialesList.push({
      icono: "pinterest-p",
      nombre: "Printerest",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      estado: false,
      animacion: true
    });
    this.redesSocialesList.push({
      icono: "google-plus",
      nombre: "Google",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      estado: false,
      animacion: true
    });
    this.redesSocialesList.push({
      icono: "github",
      nombre: "Github",
      descripcion: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      estado: false,
      animacion: true
    });
  }

  ocultarRedSocial(redSocial: RedSocial){
    console.info(redSocial);
    redSocial.estado = !redSocial.estado;
  }

  animar(redSocial: RedSocial){
    redSocial.animacion = !redSocial.animacion;
  }

}

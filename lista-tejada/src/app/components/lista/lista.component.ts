import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  angular_img:string = 'assets/bxl-angular.svg';
  vue_img:string = 'assets/bxl-vuejs.svg';
  js_img:string = 'assets/bxl-javascript.svg';
  react_img:string = 'assets/bxl-react.svg';

  //date
  fecha = Date.now();

  constructor() { }

  ngOnInit(): void {
  }

  //Set the border-left color 
  setColor(interes: string) {
    switch (interes) {
      case 'Angular':
        return '#ff384a';
      case 'Javascript':
        return '#ffc71f';
      case 'Vue':
        return '#27a169';
      case 'React':
        return '#1860cc';
      default:
        return 'purple';
    }
  }

  //Set the icon
  setIcon(ico: string) {
    switch (ico) {
      case 'Angular':
        return this.angular_img;
      case 'Javascript':
        return this.js_img;
      case 'Vue':
        return this.vue_img;
      case 'React':
        return this.react_img;
      default:
        return 'purple';
    }
  }

  Estudiantes = [
    {
      nombre: 'Constanza',
      interes: 'Angular',
    },
    {
      nombre: 'Stefania',
      interes: 'Javascript'
    },
    {
      nombre: 'Joao',
      interes: 'Vue'
    },
    {
      nombre: 'Sergio',
      interes: 'React'
    },
    {
      nombre: 'Tamara',
      interes: 'Javascript'
    },
    {
      nombre: 'Juan',
      interes: 'Vue'
    },
    {
      nombre: 'Maria',
      interes: 'Angular'
    },
    {
      nombre: 'Francisco',
      interes: 'React'
    },
    {
      nombre: 'Cristian',
      interes: 'Angular'
    },
    {
      nombre: 'Jorge',
      interes: 'Angular'
    }
  ]

}

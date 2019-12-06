import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombre = 'Nombre del usuario';
  constructor() { }

  ngOnInit() {
  }

  cambiarNombre() {
    this.nombre = 'Edison Danilo Chica Botero';
  }

}

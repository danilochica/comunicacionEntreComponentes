import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() nombreHijo = 'Sin nombre';
  @Output() cambioNombreHijo = new EventEmitter<string>();

  constructor(private service: DataService) { }

  ngOnInit() {
  }

  cambiarNombre() {
    this.nombreHijo = 'Danilo';
    this.cambioNombreHijo.emit(this.nombreHijo);
    this.service.nombreUsuario = this.nombreHijo;
  }
}

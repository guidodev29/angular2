import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ufg16';
  tituloAEnviar = 'Titulo enviado desde el padre al Hijo'
  mensajeDelHijo = '';

  recibirMensaje(mensaje: string) {
    this.mensajeDelHijo = mensaje;
  }
}

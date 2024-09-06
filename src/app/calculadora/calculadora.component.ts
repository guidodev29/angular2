import { Component, Input, Output, EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
    num1: number=0;
    num2: number=0;
    resultado: number=0;

    sumameEsta(){
      this.resultado= this.num1+this.num2;
    }

    @Input() tituloARecibir: string = '' ;

    @Output() mensajeEmitido = new EventEmitter<string>();

  enviarMensaje() {
    const mensaje = 'Hola, soy el hijo';
    this.mensajeEmitido.emit(mensaje);
  }
}

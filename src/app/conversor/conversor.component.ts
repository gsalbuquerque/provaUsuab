import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
    selector: "app-conversor",
    templateUrl: "./conversor.component.html",
    styleUrls: ['./conversor.component.css']

})
export class ConversorComponent {
  title = 'Prova-Numero-Binario';
  numeroDecimal:number = 0;
  numeroBinario:number = 0;
  NumeroBinarioParaDecimal(){
    let resultado = parseInt(this.numeroBinario.toString(), 2);
   this.numeroDecimal = resultado;
  
}

}
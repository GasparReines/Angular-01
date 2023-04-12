import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  personajes: Array<string> = [
    ' Gaspar Reines',
    ' Tomas Morelli',
    ' Mateo Paterno',
    ' Pedro Abarca ',
    ' Fran Rojo',
  ];

  frutas: Array<string> = [
    ' Banana',
    ' Manzana',
    ' Uva',
    ' Pera',
    ' Melon',
  ];

  onSelect(ev: number, arrayName: 'personajes' | 'frutas'): void {
    console.log('SELECCIONADO', ev);

    this[arrayName].splice(ev,1);
  }
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fin-del-juego1',
  templateUrl: './fin-del-juego1.component.html',
  styleUrls: ['./fin-del-juego1.component.scss'],
})
export class FinDelJuego1Component implements OnInit {
  @Input() imagenPantalla: string = '';
  @Input() imagenTexto: string = '';
  @Input() imagenTrueno: string = '';
  @Input() imagenCentelso: string = '';

  constructor() {}

  ngOnInit(): void {}
}

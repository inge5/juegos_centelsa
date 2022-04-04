import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fin-del-juego',
  templateUrl: './fin-del-juego.component.html',
  styleUrls: ['./fin-del-juego.component.scss'],
})
export class FinDelJuegoComponent implements OnInit {
  @Input() imagenTrueno: string = '';
  @Input() imagenTitulo: string = '';
  @Input() imagenCentelso: string = '';
  @Input() imagenCerebro: string = '';
  @Input() imagenSerpentina: string = '';
  constructor() {}

  ngOnInit(): void {}
}

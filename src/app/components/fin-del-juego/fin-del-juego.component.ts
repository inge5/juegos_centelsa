import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-fin-del-juego',
  templateUrl: './fin-del-juego.component.html',
  styleUrls: ['./fin-del-juego.component.scss'],
})
export class FinDelJuegoComponent implements OnInit {
  @Input() imagenFinal: string = '';
  constructor() {}

  ngOnInit(): void {}
}

import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-portada',
  templateUrl: './portada.component.html',
  styleUrls: ['./portada.component.scss'],
})
export class PortadaComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    $('.cambiar-imagen').mouseenter(() => {
      $('.cambiar-imagen>img').attr(
        'src',
        './assets/imagenes/juego2/boton-accion-portada.png'
      );
    });
    $('.cambiar-imagen').mouseleave(() => {
      $('.cambiar-imagen>img').attr(
        'src',
        './assets/imagenes/juego2/boton-portada.png'
      );
    });
  }
}

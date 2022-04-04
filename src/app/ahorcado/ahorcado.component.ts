import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import abecedario from '../../assets/json/alfabeto.json';
import baul from '../../assets/json/baul-palabras.json';
declare var $: any;

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss'],
})
export class AhorcadoComponent implements OnInit {
  palabraConGuiones: string = '';
  tiempo: moment.Duration;
  activo: boolean = false;
  interval: any;
  segundos: number = 60;
  intentos: number = 0;
  haFallado: boolean = true;
  alfabeto = abecedario;
  palabra: any;
  palabras: string[] = baul;

  constructor(private router: Router) {}

  ngOnInit(): void {
    let palabrasAux: string[] = [];
    this.palabras.forEach((word: any, index: number) => {
      palabrasAux.push(word.palabra);
    });
    this.palabras = palabrasAux;
    this.iniciarJuego();
  }

  reload() {
    window.location.reload();
  }

  iniciarJuego() {
    this.palabra =
      this.palabras[Math.floor(Math.random() * this.palabras.length)];

    for (let i = 0; i < this.palabra.length; i++) {
      this.palabraConGuiones = this.palabraConGuiones + '_ ';
    }
    let nuevo: string = '';
    for (let i = 0; i < this.palabra.length; i++) {
      if (' ' == this.palabra[i].toUpperCase()) {
        nuevo = nuevo + '.' + ' ';
      } else {
        nuevo = nuevo + this.palabraConGuiones[i * 2] + ' ';
      }
    }
    this.palabraConGuiones = nuevo;
  }

  colocarLetra(claseBtn: string, word: string) {
    this.haFallado = true;
    if (!this.activo) {
      this.contador();
    }
    const letra = word;
    let nuevo: string = '';
    for (let i = 0; i < this.palabra.length; i++) {
      if (letra.toUpperCase() == this.palabra[i].toUpperCase()) {
        nuevo = nuevo + letra + ' ';
        this.haFallado = false;
      } else {
        console.log(letra.toUpperCase());
        console.log(this.palabra[i].toUpperCase());
        nuevo = nuevo + this.palabraConGuiones[i * 2] + ' ';
      }
    }
    this.palabraConGuiones = nuevo;

    $(claseBtn).addClass('disabled');
    if (this.haFallado) {
      this.intentos++;
      if (this.intentos === 6) {
        clearInterval(this.interval);
        this.router.navigateByUrl('/pierde-juego');
      }
    } else {
      if (this.palabraConGuiones.indexOf('_ ') < 0) {
        clearInterval(this.interval);
        this.router.navigateByUrl('/gana-juego');
      }
    }
  }

  contador() {
    this.activo = true;
    this.interval = setInterval(() => {
      this.tiempo = moment.duration((this.segundos -= 1), 'second');
      if (this.tiempo.asSeconds() === 0) {
        clearInterval(this.interval);
        this.router.navigateByUrl('/pierde-juego');
      }
    }, 1000);
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { Alfabeto } from 'src/app/models/alfabeto.model';
import { environment } from 'src/environments/environment';
import abecedario from '../../../assets/json/alfabeto.json';
declare var $: any;

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.scss'],
})
export class AhorcadoComponent implements OnInit {
  palabraConGuiones: any;
  tiempo: moment.Duration;
  activo: boolean = false;
  interval: any;
  segundos: number = 60;
  intentos: number = 0;
  haFallado: boolean = true;
  alfabeto: Alfabeto[] = abecedario;
  palabra: any;

  constructor(private router: Router) {}
  palabras: string[] = [
    'Electromagnetismo',
    'Reglamento tecnico de instalaciones electricas',
    'Cables para energias renovables',
    'Cables de energia y telecomunicaciones',
  ];

  ngOnInit(): void {
    this.iniciarJuego();
  }

  reload() {
    window.location.reload();
  }

  iniciarJuego() {
    this.palabra =
      this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraConGuiones = this.palabra.replace(/./g, '_ ');

    String.prototype.replace = function (index: any, character: any) {
      return (
        this.substr(0, index) +
        character +
        this.substr(index + character.length)
      );
    };

    for (const i in this.palabra) {
      if (' ' == this.palabra[i].toUpperCase()) {
        this.palabraConGuiones = this.palabraConGuiones.replace(
          parseInt(i) * 2,
          `-`
        );
        console.log(this.palabraConGuiones.indexOf('-'));
      }
    }
  }

  colocarLetra(claseBtn: string, word: string) {
    this.haFallado = true;
    if (!this.activo) {
      this.contador();
    }
    const letra = word;
    for (const i in this.palabra) {
      if (letra.toUpperCase() == this.palabra[i].toUpperCase()) {
        this.palabraConGuiones = this.palabraConGuiones.replace(
          parseInt(i) * 2,
          letra
        );
        this.haFallado = false;
      }
    }
    console.log(claseBtn);
    $(claseBtn).addClass('disabled');
    if (this.haFallado) {
      this.intentos++;
      console.log(this.intentos);
      if (this.intentos === 6) {
        clearInterval(this.interval);
        window.open(`${environment.url}/#/pierde-juego`);
      }
    } else {
      if (this.palabraConGuiones.indexOf('_ ') < 0) {
        clearInterval(this.interval);
        window.open(`${environment.url}/#/gana-juego`);
      }
    }
  }

  contador() {
    this.activo = true;
    this.interval = setInterval(() => {
      this.tiempo = moment.duration((this.segundos -= 1), 'second');
      if (this.tiempo.asSeconds() === 0) {
        clearInterval(this.interval);
        window.open(`${environment.url}/#/pierde-juego`);
      }
    }, 1000);
  }
}

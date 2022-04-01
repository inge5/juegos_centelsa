import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
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
  constructor(private router: Router) {}

  palabras: string[] = [
    'casa azul',
    // 'Electromagnetismo',
    // 'Reglamento tecnico de instalaciones electricas',
    // 'Cables para energias renovables',
    // 'Cables de energia y telecomunicaciones',
  ];

  ngOnInit(): void {
    this.iniciarJuego();
  }

  reload() {
    window.location.reload();
  }

  iniciarJuego() {
    let palabra: any =
      this.palabras[Math.floor(Math.random() * this.palabras.length)];
    this.palabraConGuiones = palabra.replace(/./g, '_ ');

    String.prototype.replace = function (index: any, character: any) {
      return (
        this.substr(0, index) +
        character +
        this.substr(index + character.length)
      );
    };

    for (const i in palabra) {
      if (' ' == palabra[i].toUpperCase()) {
        this.palabraConGuiones = this.palabraConGuiones.replace(
          parseInt(i) * 2,
          '-'
        );
      }
    }

    document.querySelector('.calcular1')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'A';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular1').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
          clearInterval(this.interval);
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular2')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'B';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular2').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
          clearInterval(this.interval);
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular3')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'C';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular3').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular4')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'D';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular4').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular5')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'E';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular5').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular6')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'F';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular6').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular7')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'G';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular7').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular8')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'H';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular8').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular9')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'I';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular9').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular10')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'J';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular10').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular11')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'K';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular11').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular12')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'L';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular12').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular13')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'M';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular13').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular14')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'N';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular14').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular15')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'Ñ';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular15').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular16')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'O';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular16').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular17')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'P';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular17').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular18')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'Q';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular18').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular19')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'R';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular19').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular20')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'S';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular20').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular21')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'T';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular21').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular22')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'U';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular22').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular23')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'V';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular23').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular24')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'W';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular24').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular25')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'X';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular25').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular26')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'Y';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular26').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
    document.querySelector('.calcular27')?.addEventListener('click', () => {
      this.haFallado = true;
      if (!this.activo) {
        this.contador();
      }
      const letra = 'Z';
      for (const i in palabra) {
        if (letra.toUpperCase() == palabra[i].toUpperCase()) {
          this.palabraConGuiones = this.palabraConGuiones.replace(
            parseInt(i) * 2,
            letra
          );
          this.haFallado = false;
        }
      }
      $('.calcular27').addClass('disabled');
      if (this.haFallado) {
        this.intentos++;
        console.log(this.intentos);
        if (this.intentos === 6) {
          alert('PERDISTE POR INTENTOS');
        }
      } else {
        if (this.palabraConGuiones.indexOf('_ ') < 0) {
          alert('GANASTE');
          clearInterval(this.interval);
        }
      }
    });
  }
  contador() {
    this.activo = true;
    this.interval = setInterval(() => {
      this.tiempo = moment.duration((this.segundos -= 1), 'second');
      if (this.tiempo.asSeconds() === 0) {
        alert('PIERDE');
        clearInterval(this.interval);
      }
    }, 1000);
  }
}

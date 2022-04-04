import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardData } from 'src/app/models/card-data.model';
import * as moment from 'moment';

@Component({
  selector: 'app-memorama',
  templateUrl: './memorama.component.html',
  styleUrls: ['./memorama.component.scss'],
})
export class MemoramaComponent implements OnInit {
  cardImagesAux = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
    '9.png',
    '10.png',
    '11.png',
    '12.png',
    '13.png',
    '14.png',
  ];
  cardImages: string[] = [];
  tiempo: moment.Duration;
  interval: any;
  segundos: number = 60;
  cards: CardData[] = [];
  flippedCards: CardData[] = [];
  matchedCount = 0;
  movimientos: number = 0;
  desaciertos: number = 0;

  constructor(private router: Router) {
    for (let i = 0; i < 8; i++) {
      let positionAleatoria = Math.random() * this.cardImagesAux.length;
      if (this.cardImages.length > 0) {
        for (const pos in this.cardImages) {
          if (
            this.cardImages[pos] ==
            this.cardImagesAux[Math.floor(positionAleatoria)]
          ) {
            this.cardImagesAux.splice(Math.floor(positionAleatoria), 1);
          }
        }
        this.cardImages[i] = this.cardImagesAux[Math.floor(positionAleatoria)];
      } else {
        this.cardImages[i] = this.cardImagesAux[Math.floor(positionAleatoria)];
      }
    }
  }
  ngOnDestroy(): void {
    this.reset();
  }

  ngOnInit(): void {
    this.setupCards();
  }
  shuffleArray(anArray: any[]): any[] {
    return anArray
      .map((a) => [Math.random(), a])
      .sort((a, b) => a[0] - b[0])
      .map((a) => a[1]);
  }

  setupCards(): void {
    this.cards = [];
    this.cardImages.forEach((image) => {
      const cardData: CardData = {
        imageId: image,
        state: 'default',
      };

      this.cards.push({ ...cardData });
      this.cards.push({ ...cardData });
    });

    this.cards = this.shuffleArray(this.cards);
  }
  cardClicked(index: number): void {
    if (!this.interval) {
      this.contador();
    }
    const cardInfo = this.cards[index];
    if (cardInfo.state === 'default' && this.flippedCards.length < 2) {
      cardInfo.state = 'flipped';
      this.flippedCards.push(cardInfo);

      if (this.flippedCards.length > 1) {
        this.checkForCardMatch();
      }
    } else if (cardInfo.state === 'flipped') {
      cardInfo.state = 'default';
      this.flippedCards.pop();
    }
  }
  checkForCardMatch(): void {
    setTimeout(() => {
      const cardOne = this.flippedCards[0];
      const cardTwo = this.flippedCards[1];
      if (
        cardOne.imageId === cardTwo.imageId &&
        cardOne.imageId === '9.png' &&
        cardTwo.imageId === '9.png'
      ) {
        this.router.navigateByUrl('gana');
      }
      const nextState =
        cardOne.imageId === cardTwo.imageId ? 'matched' : 'default';
      cardOne.state = cardTwo.state = nextState;
      this.movimientos++;
      this.flippedCards = [];
      if (nextState === 'matched') {
        this.matchedCount++;

        if (this.matchedCount === this.cardImages.length) {
          this.router.navigateByUrl('gana');
        }
      } else {
        this.desaciertos++;
      }
    }, 1000);
  }
  contador() {
    this.interval = setInterval(() => {
      this.tiempo = moment.duration((this.segundos -= 1), 'second');
      if (this.tiempo.asSeconds() === 0) {
        this.reset();
        this.router.navigateByUrl('pierde');
      }
    }, 1000);
  }
  reset() {
    this.setupCards();
    this.movimientos = 0;
    this.matchedCount = 0;
    this.desaciertos = 0;
    this.segundos = 60;
    clearInterval(this.interval);
    this.interval = undefined;
  }
}

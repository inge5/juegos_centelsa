import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CardData } from 'src/app/models/card-data.model';
import * as moment from 'moment';

@Component({
  selector: 'app-memorama',
  templateUrl: './memorama.component.html',
  styleUrls: ['./memorama.component.scss'],
})
export class MemoramaComponent implements OnInit, OnDestroy {
  cardImages = [
    '1.png',
    '2.png',
    '3.png',
    '4.png',
    '5.png',
    '6.png',
    '7.png',
    '8.png',
  ];
  tiempo: moment.Duration;
  interval: any;
  segundos: number = 60;
  cards: CardData[] = [];
  flippedCards: CardData[] = [];
  matchedCount = 0;
  movimientos: number = 0;
  desaciertos: number = 0;

  constructor(private router: Router) {}
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
      console.log('no existe intervalo, se creó');
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
      console.log(this.tiempo.asSeconds());
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

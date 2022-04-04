import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CardData } from '../../models/card-data.model';

@Component({
  selector: 'app-cartas-memorama',
  templateUrl: './cartas-memorama.component.html',
  styleUrls: ['./cartas-memorama.component.scss'],
  animations: [
    trigger('cardFlip', [
      state(
        'default',
        style({
          transform: 'none',
        })
      ),
      state(
        'flipped',
        style({
          transform: 'perspective(600px) rotateY(180deg)',
        })
      ),
      state(
        'matched',
        style({
          visibility: 'false',
          transform: 'scale(0.05)',
          opacity: 0,
        })
      ),
      transition('default => flipped', [animate('400ms')]),
      transition('flipped => default', [animate('400ms')]),
      transition('* => matched', [animate('400ms')]),
    ]),
  ],
})
export class CartasMemoramaComponent implements OnInit {
  @Input() data: CardData;

  @Output() cardClicked = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}
}

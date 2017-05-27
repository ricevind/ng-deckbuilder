import { Component, OnInit, Input, OnDestroy, ViewChild, Output, EventEmitter, ElementRef, AfterViewInit, HostBinding } from '@angular/core';
import { Card } from '../models/card';
import { CardsImageService } from '../services/cards-image.service';
import { Subscription } from 'rxjs/Subscription';
import { trigger, transition, style, animate } from "@angular/animations";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
   animations: [
    trigger('dialog', [
      transition('void => *', [
        style({ height: '0' }),
        animate(500, style({ height: '240px' }))
      ]),
      transition('* => void', [
        style({ height: '240px' }),
        animate(200, style({ height: '0' }))
      ])
    ])
  ]
})
export class CardComponent implements OnInit, OnDestroy {
  @Input() card: Card;
  @Output() sendCard = new EventEmitter();
  @ViewChild('cardDiv') cardElement: ElementRef;
  @HostBinding('@dialog') get dialog() {return true}

  public image: HTMLImageElement;
  public isLoaded = false;
  private image$: Subscription;

  constructor(private csi: CardsImageService) { }

  ngOnInit() {
     this.image$ = this.csi.getImage(this.card.img)
      .subscribe((image: HTMLImageElement) => {
        this.image = image.cloneNode(false) as HTMLImageElement;
        this.cardElement.nativeElement.append(this.image);
        this.isLoaded = true;
      });
  }


  ngOnDestroy() {
    this.image$.unsubscribe();
    this.isLoaded = false;
  }

  onClick(): void {
    this.sendCard.emit(this.card);
  }

}

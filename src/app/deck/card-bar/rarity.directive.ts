import { Directive, OnInit, ElementRef, Input, HostListener,
         TemplateRef, ViewContainerRef, ComponentFactoryResolver,
         ComponentRef, ComponentFactory
} from '@angular/core';
import { CardsImageService } from '../../shared/services/cards-image.service';
import { CardComponent } from '../../shared/card/card.component';
import { Card } from '../../shared/models/card';

const RARITY_COLOR = {
  'Free': 'lighgrey',
  'Common': 'grey',
  'Rare': 'lightblue',
  'Epic': 'purple',
  'Legendary': 'orange'
};

@Directive({
  selector: '[rarity]'
})
export class RarityDirective implements OnInit {
  private cardComponent: ComponentRef<CardComponent>;
  private cardCompFact: ComponentFactory<CardComponent>;

  @Input() rarity: string;
  @Input() card: Card;
  @HostListener('mouseenter') hostStyles() {
    (this.elem.nativeElement as HTMLElement).style.backgroundColor = 'red';
    this.cardComponent.instance.isAnimate = 'out';
  };
  @HostListener('mouseleave') hostStylesRevoke() {
    (this.elem.nativeElement as HTMLElement).style.backgroundColor = RARITY_COLOR[this.rarity];
    this.cardComponent.instance.isAnimate = 'in';
  };

  constructor(
    private elem: ElementRef,
    private vcr: ViewContainerRef,
    private cfr: ComponentFactoryResolver,
    private cis: CardsImageService,
    ) {}

  initCardComponent() {
   this.cardCompFact = this.cfr.resolveComponentFactory(CardComponent);
  }

  ngOnInit() {
    (this.elem.nativeElement as HTMLElement).style.backgroundColor = RARITY_COLOR[this.rarity];
    this.initCardComponent();
    this.injectImage();
  }

  injectImage() {
    this.cardComponent = this.vcr.createComponent(this.cardCompFact);
    this.cardComponent.instance.card = this.card;
    this.cardComponent.instance.isAnimate = 'in';
  }

  destroyImage() {
    this.vcr.detach(1);
  }
}

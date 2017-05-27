import { Directive, OnInit, ElementRef, Input, HostListener,
         TemplateRef, ViewContainerRef, ComponentFactoryResolver,
         ComponentRef, ComponentFactory
} from '@angular/core';
import { CardsImageService } from '../../shared/services/cards-image.service';
import { CardComponent } from '../../shared/card/card.component';
import { Card } from '../../shared/models/card';

const RARITY_COLOR = {
  'Free': 'white',
  'Common': 'grey',
  'Rare': 'blue',
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
    this.injectImage();
  };
  @HostListener('mouseleave') hostStylesRevoke() {
    (this.elem.nativeElement as HTMLElement).style.backgroundColor = RARITY_COLOR[this.rarity];
    this.destroyImage();
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
  }

  injectImage() {
    this.cardComponent = this.vcr.createComponent(this.cardCompFact);
    this.cardComponent.instance.card = this.card;
  }

  destroyImage() {
    // this.cardComponent.destroy();
    this.vcr.detach(1);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CardsImageService {
  private _imageStorage: Map<string, HTMLImageElement> = new Map();

  newImage(url: string): HTMLImageElement {
    const img = new Image();
    img.src = url;
    this._imageStorage.set(url, img);
    return img;
  }

  setImage(url: string, image: HTMLImageElement) {
    this._imageStorage.set(url, image);
  }

  getImage(url: string): Observable<HTMLImageElement> {
    if (this._imageStorage.has(url)) {
      return Observable.of(this._imageStorage.get(url));
    } else {
      return Observable.fromEvent(this.newImage(url), 'load')
        .map(() => this._imageStorage.get(url));
    }
  }

}

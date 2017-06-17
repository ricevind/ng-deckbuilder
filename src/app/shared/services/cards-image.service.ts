import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CardsImageService {
  private _imageStorage: Map<string, HTMLImageElement> = new Map();
  private _imagesLoading$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private _loaderCount = 0;

  private newImage(url: string): HTMLImageElement {
    const img = new Image();
    img.src = url;
    this._imageStorage.set(url, img);
    return img;
  }

  public setImage(url: string, image: HTMLImageElement) {
    this._imageStorage.set(url, image);
  }

  public getImage(url: string): Observable<HTMLImageElement> {
    this.increasLoading();
    if (this._imageStorage.has(url)) {
      this.checkLoading();
      return Observable.of(this._imageStorage.get(url));
    } else {
      this.checkLoading();
      return Observable.fromEvent(this.newImage(url), 'load')
        .map(() => this._imageStorage.get(url));
    }
  }

  public get isLoadingImages(): Observable<boolean> {
    return this._imagesLoading$.asObservable().distinctUntilChanged();
  }

  private checkLoading(): void {
    this._loaderCount -= 1;
    console.log(this._loaderCount)
    if (this._loaderCount === 0) {
      this._imagesLoading$.next(false);
    }
  }

  private increasLoading(): void {
    this._loaderCount += 1;
    this._imagesLoading$.next(true);
  }

}

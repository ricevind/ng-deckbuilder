import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, Event, NavigationCancel } from '@angular/router';

@Component({
  selector: 'loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  public loading = false;

  constructor(
    private router: Router
    ) { }

  ngOnInit() {
    this.router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        this.loading = true;
      } else if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
        this.loading = false;
      }
    });
  }
}

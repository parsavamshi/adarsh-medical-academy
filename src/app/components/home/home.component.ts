import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
  }

  homeSlides: OwlOptions = {
  loop: true,
  nav: true,
  dots: false,
  autoplayHoverPause: true,
  items: 1,
  autoHeight: true,
  smartSpeed: 750,
  autoplay: true,
  navText: [
    "<i class='fa fa-angle-left'></i>",
    "<i class='fa fa-angle-right'></i>"
  ]
  }
}

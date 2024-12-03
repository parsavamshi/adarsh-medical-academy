import { Component } from '@angular/core';

@Component({
  selector: 'app-competitves',
  templateUrl: './competitves.component.html',
  styleUrls: ['./competitves.component.scss']
})
export class CompetitvesComponent {
  scrollToTop() {
    (function smoothscroll() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          //   window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 0));
        }
    })();
}
}

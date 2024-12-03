import { Component } from '@angular/core';

@Component({
  selector: 'app-acadamics',
  templateUrl: './acadamics.component.html',
  styleUrls: ['./acadamics.component.scss']
})
export class AcadamicsComponent {

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

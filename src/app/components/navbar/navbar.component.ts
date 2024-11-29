import { ViewportScroller } from '@angular/common';
import { Component, HostListener  } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private viewportScroller: ViewportScroller) {}

  public onClick(elementId: string): void {
      this.viewportScroller.scrollToAnchor(elementId);
  }

  ngOnInit() {
  }

  classApplied = false;
  toggleClass() {
      this.classApplied = !this.classApplied;
  }

  scrollToTop() {
    (function smoothscroll() {
        const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
        if (currentScroll > 0) {
          //   window.requestAnimationFrame(smoothscroll);
            window.scrollTo(0, currentScroll - (currentScroll / 0));
        }
    })();
  }

  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollOffset = window.pageYOffset || document.documentElement.scrollTop || 0;
    this.isScrolled = scrollOffset > 10; // Change class after scrolling 10px
  }



}


// import { Component, HostListener } from '@angular/core';

// @Component({
//     selector: 'app-navbar',
//     templateUrl: './navbar.component.html',
//     styleUrls: ['./navbar.component.scss']
//   })
//   export class NavbarComponent {
//   classApplied = false;

//   // Listen to the window scroll event
//   @HostListener('window:scroll', ['$event'])
//   onWindowScroll(event: any) {
//     this.classApplied = window.scrollY > 50;  // Apply class after scrolling 50px
//   }

//   scrollToTop() {
//     window.scrollTo(0, 0);  // Scroll to the top of the page
//   }

//   toggleClass() {
//     this.classApplied = !this.classApplied;  // Toggle class for navbar
//   }
// }


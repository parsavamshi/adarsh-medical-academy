// import { Component } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations'
import { Component, VERSION, ViewEncapsulation } from '@angular/core';
import lgZoom from 'lightgallery/plugins/zoom';
import { BeforeSlideDetail } from 'lightgallery/lg-events';
import { InitDetail } from 'lightgallery/lg-events';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
  animations: [
    trigger('galleryAnimation', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('500ms', style({ opacity: 0 })),
      ]),
    ]),
  ],
  encapsulation: ViewEncapsulation.None
})
export class GalleryComponent {
  images: any[] = [
    // { url: '../../../../../assets/images/gallery/1.JPG',
    // caption: 'Image 1',
    // responsive: 'https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=480&q=80 480, https://images.unsplash.com/photo-1581894158358-5ecd2c518883?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80 800',
    // subHtml: '<h4>Photo by - <a href="https://unsplash.com/@entrycube">Diego Guzmán</a></h4><p>Location - <a href="https://unsplash.com/s/photos/fushimi-inari-taisha-shrine-senbontorii%2C-68%E7%95%AA%E5%9C%B0-fukakusa-yabunouchicho%2C-fushimi-ward%2C-kyoto%2C-japan">Fushimi Ward, Kyoto, Japan</a></p>'
    // },
    { url: '../../../../../assets/images/gallery/1.jpg', caption: 'Image 1' },
    { url: '../../../../../assets/images/gallery/2.jpg', caption: 'Image 2' },
    { url: '../../../../../assets/images/gallery/3.jpg', caption: 'Image 3' },
    { url: '../../../../../assets/images/gallery/4.jpg', caption: 'Image 4' },
    { url: '../../../../../assets/images/gallery/5.jpg', caption: 'Image 5' },
    { url: '../../../../../assets/images/gallery/6.jpg', caption: 'Image 6' },
    { url: '../../../../../assets/images/gallery/7.jpg', caption: 'Image 7' },
    { url: '../../../../../assets/images/gallery/8.jpg', caption: 'Image 8' },
    { url: '../../../../../assets/images/gallery/9.jpg', caption: 'Image 9' },
    { url: '../../../../../assets/images/gallery/10.jpg', caption: 'Image 10' },
    { url: '../../../../../assets/images/gallery/11.jpg', caption: 'Image 11' },
    { url: '../../../../../assets/images/gallery/12.jpg', caption: 'Image 12' },
    { url: '../../../../../assets/images/gallery/13.jpg', caption: 'Image 13' },
    { url: '../../../../../assets/images/gallery/14.jpg', caption: 'Image 14' },
    { url: '../../../../../assets/images/gallery/15.jpg', caption: 'Image 15' },
    { url: '../../../../../assets/images/gallery/16.jpg', caption: 'Image 16' },
    { url: '../../../../../assets/images/gallery/17.jpg', caption: 'Image 17' },
    { url: '../../../../../assets/images/gallery/18.jpg', caption: 'Image 18' },
    { url: '../../../../../assets/images/gallery/19.jpg', caption: 'Image 19' },
    { url: '../../../../../assets/images/gallery/20.jpg', caption: 'Image 20' },
    { url: '../../../../../assets/images/gallery/21.jpg', caption: 'Image 21' },
    { url: '../../../../../assets/images/gallery/22.jpg', caption: 'Image 22' },
    { url: '../../../../../assets/images/gallery/23.jpg', caption: 'Image 23' },
    { url: '../../../../../assets/images/gallery/24.jpg', caption: 'Image 24' },
    { url: '../../../../../assets/images/gallery/25.jpg', caption: 'Image 25' },
    { url: '../../../../../assets/images/gallery/26.jpg', caption: 'Image 26' },
    { url: '../../../../../assets/images/gallery/27.jpg', caption: 'Image 27' },
    { url: '../../../../../assets/images/gallery/28.jpg', caption: 'Image 28' },
    { url: '../../../../../assets/images/gallery/29.jpg', caption: 'Image 29' },
    { url: '../../../../../assets/images/gallery/30.jpg', caption: 'Image 30' },
    { url: '../../../../../assets/images/gallery/31.jpg', caption: 'Image 31' },
    { url: '../../../../../assets/images/gallery/32.jpg', caption: 'Image 32' },
    { url: '../../../../../assets/images/gallery/33.jpg', caption: 'Image 33' },
    { url: '../../../../../assets/images/gallery/34.jpg', caption: 'Image 34' },
    { url: '../../../../../assets/images/gallery/35.jpg', caption: 'Image 35' },
    { url: '../../../../../assets/images/gallery/36.jpg', caption: 'Image 36' },
    { url: '../../../../../assets/images/gallery/37.jpg', caption: 'Image 37' },

  ];
  settings = {
    counter: false,
    plugins: [lgZoom]
  };
  onBeforeSlide = (detail: BeforeSlideDetail): void => {
    const { index, prevIndex } = detail;
    console.log(index, prevIndex);
  };
}

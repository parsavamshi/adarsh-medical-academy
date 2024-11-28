// import { StickyNavModule } from './../../node_modules/ng2-sticky-nav/index';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { AcadamicsComponent } from './components/acadamics/acadamics.component';
import { BipcComponent } from './components/acadamics/bipc/bipc.component';
import { MpcComponent } from './components/acadamics/mpc/mpc.component';
import { CompetitvesComponent } from './components/competitves/competitves.component';
import { IitJeeComponent } from './components/competitves/iit-jee/iit-jee.component';
import { NeetComponent } from './components/competitves/neet/neet.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { GalleryComponent } from './components/gallery/gallery.component';
// import { StickyNavModule } from 'ng2-sticky-nav';
import { AboutUsInnerComponent } from './components/about-us/about-us-inner/about-us-inner.component';
import { AcadamicInnerComponent } from './components/acadamics/acadamic-inner/acadamic-inner.component';
import { CompetitveInnerComponent } from './components/competitves/competitve-inner/competitve-inner.component';
import { BlogInnerComponent } from './components/blog/blog-inner/blog-inner.component';
import { ContactInnerComponent } from './components/contact-us/contact-inner/contact-inner.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutUsComponent,
    ContactUsComponent,
    AcadamicsComponent,
    BipcComponent,
    MpcComponent,
    CompetitvesComponent,
    IitJeeComponent,
    NeetComponent,
    BlogComponent,
    BlogDetailsComponent,
    SubscribeComponent,
    GalleryComponent,
    AboutUsInnerComponent,
    AcadamicInnerComponent,
    CompetitveInnerComponent,
    BlogInnerComponent,
    ContactInnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule,
    // StickyNavModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

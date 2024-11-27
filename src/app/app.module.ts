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
    BlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

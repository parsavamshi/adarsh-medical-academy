import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AcadamicsComponent } from './components/acadamics/acadamics.component';
import { BipcComponent } from './components/acadamics/bipc/bipc.component';
import { MpcComponent } from './components/acadamics/mpc/mpc.component';
import { CompetitvesComponent } from './components/competitves/competitves.component';
import { IitJeeComponent } from './components/competitves/iit-jee/iit-jee.component';
import { NeetComponent } from './components/competitves/neet/neet.component';
import { BlogComponent } from './components/blog/blog.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { AboutUsInnerComponent } from './components/about-us/about-us-inner/about-us-inner.component';
import { AcadamicInnerComponent } from './components/acadamics/acadamic-inner/acadamic-inner.component';
import { CompetitveInnerComponent } from './components/competitves/competitve-inner/competitve-inner.component';
import { BlogInnerComponent } from './components/blog/blog-inner/blog-inner.component';
import { ContactInnerComponent } from './components/contact-us/contact-inner/contact-inner.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about-us', component:AboutUsInnerComponent},
  {path:'academics', component:AcadamicInnerComponent},
  {path:'bipc', component:BipcComponent},
  {path:'mpc', component:MpcComponent},
  {path:'competitive', component:CompetitveInnerComponent},
  {path:'iit-jee', component:IitJeeComponent},
  {path:'neet', component:NeetComponent},
  {path:'blog', component:BlogInnerComponent},
  {path:'gallery', component:GalleryComponent},
  {path:'contact-us', component:ContactInnerComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

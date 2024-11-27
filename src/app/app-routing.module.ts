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

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'academics', component:AcadamicsComponent},
  {path:'bipc', component:BipcComponent},
  {path:'mpc', component:MpcComponent},
  {path:'competitve', component:CompetitvesComponent},
  {path:'iit-jee', component:IitJeeComponent},
  {path:'neet', component:NeetComponent},
  {path:'blog', component:BlogComponent},
  {path:'contact-us', component:ContactUsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

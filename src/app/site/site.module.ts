import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'clients', component:ClientsComponent},
  {path:'contact-us', component:ContactUsComponent},
  {path:'', component:HomeComponent},
]; 

@NgModule({
  declarations: [
    HomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    ClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  // exports: [RouterModule]
})
export class SiteModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path:'', component:LayoutComponent, 
    children:[
      {path:'home', component:HomeComponent},
      {path:'about', component:AboutComponent},
      {path:'contact', component:ContactComponent},
      {path:'', component:HomeComponent},
    ]
  }
];

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SiteModule { }

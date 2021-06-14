import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { SiteModule } from './site/site.module';
// import { AuthModule } from './auth/auth.module';
// import { StudentModule } from './student/student.module';
import { SharedModule } from './shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: 'site',
    loadChildren: () => import('./site/site.module').then(m => m.SiteModule),
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
  },
  { path: '',   redirectTo: '/site/home', pathMatch: 'full' },
];


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

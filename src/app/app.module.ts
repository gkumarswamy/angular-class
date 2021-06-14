import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SiteModule } from './site/site.module';
import { AuthModule } from './auth/auth.module';
import { StudentModule } from './student/student.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    SiteModule,
    SharedModule,
    StudentModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

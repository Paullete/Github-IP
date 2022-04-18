import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from './date.pipe';
import { HighlightDirective } from './highlight.directive';
import { MyReposComponent } from './my-repos/my-repos/my-repos.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { ProfileComponent } from './profile/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    DatePipe,
    HighlightDirective,
    MyReposComponent,
    NavbarComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

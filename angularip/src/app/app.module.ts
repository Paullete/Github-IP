import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { MyRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePipe } from './date.pipe';
import { GithubService } from './github.service';
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
    MyRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }

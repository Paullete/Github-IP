import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile/profile/profile.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { MyReposComponent } from './my-repos/my-repos/my-repos.component';
const appRoutes: Routes = [

  {path: '', component:ProfileComponent},
  {path: 'profile', component:ProfileComponent},
  {path: 'my-repos', component:MyReposComponent}
];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class MyRoutingModule { }

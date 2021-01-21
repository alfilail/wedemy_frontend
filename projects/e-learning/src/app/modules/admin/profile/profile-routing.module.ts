import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from '@bootcamp-elearning/pages/admin/profile/profile.component';

const routes: Routes = [
  { path: 'profiles', component: ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }

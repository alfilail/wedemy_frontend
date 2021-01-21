import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminBaseComponent } from './layouts/base/admin/admin-base.component';
import { HomepageBaseComponent } from './layouts/base/homepage/homepage-base.component';
import { ParticipantBaseComponent } from './layouts/base/participant-instructor/participant-base.component';
import { HomePageBaseModule } from './modules/homepage/base/homepage-base.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: HomepageBaseComponent,
    loadChildren: () => import('@bootcamp-elearning/modules/homepage/homepage.module')
      .then(m => m.HomepageModule)
  },
  {
    path: 'admin',
    component: AdminBaseComponent,
    loadChildren: () => import('@bootcamp-elearning/modules/admin/admin.module')
      .then(m => m.AdminModule)
  },
  {
    path: 'participant',
    component: ParticipantBaseComponent,
    loadChildren: () => import('@bootcamp-elearning/modules/participant-instructor/participant.module')
      .then(m => m.ParticipantModule)
  },
  {
    path: 'instructor',
    component: ParticipantBaseComponent,
    loadChildren: () => import('@bootcamp-elearning/modules/participant-instructor/instructor.module')
      .then(m => m.InstructorModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./modules/auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: '**',
    loadChildren: () => import('./modules/page404/page404.module')
      .then(m => m.Page404Module)
  }


];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    HomePageBaseModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

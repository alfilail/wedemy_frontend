import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from '@bootcamp-admin/pages/dashboard/containers';
import { HomepageBaseComponent } from '@bootcamp-homepage/layouts/base/homepage/homepage-base.component';
import { HomepageBaseModule } from './modules/homepage/base/homepage-base.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  // {
  //   path: 'dashboard',
  //   pathMatch: 'full',
  //   component: DashboardPageComponent
  // },
  {
    path: '',
    component: HomepageBaseComponent,
    loadChildren: () => import('@bootcamp-homepage/modules/homepage/homepage.module')
      .then(m => m.HomepageModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('@bootcamp-homepage/modules/auth/auth.module')
      .then(m => m.AuthModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('@bootcamp-admin/app.module')
      .then(m => m.AppModule)
  },
  {
    path: '',
    loadChildren: () => import('@bootcamp-elearning/app.module')
      .then(m => m.AppModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HomepageBaseModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BaseComponent } from './layouts/base/base.component';

const routes: Routes = [
  {
    path: 'instructor',
    component: BaseComponent,
    loadChildren: () => import('@bootcamp-elearning/modules/instructor.module')
      .then(m => m.InstructorModule)
  },
  {
    path: 'participant',
    component: BaseComponent,
    loadChildren: () => import('@bootcamp-elearning/modules/participant.module')
      .then(m => m.ParticipantModule)
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
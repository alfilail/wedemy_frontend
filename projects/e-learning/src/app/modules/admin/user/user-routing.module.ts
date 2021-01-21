import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstructorCreateComponent } from '@bootcamp-elearning/pages/admin/user/instructor/create/instructor-create.component';
import { InstructorReadComponent } from '@bootcamp-elearning/pages/admin/user/instructor/read/instructor-read.component';
import { ParticipantCreateComponent } from '@bootcamp-elearning/pages/admin/user/participant/create/participant-create.component';
import { ParticipantReadComponent } from '@bootcamp-elearning/pages/admin/user/participant/read/participant-read.component';

const routes: Routes = [
  { path: 'participants', component: ParticipantReadComponent },
  { path: 'participants/new', component: ParticipantCreateComponent },
  { path: 'instructors', component: InstructorReadComponent },
  { path: 'instructors/new', component: InstructorCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }

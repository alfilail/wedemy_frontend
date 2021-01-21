import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssigmentCreateComponent } from '@bootcamp-elearning/pages/admin/assignment/create/assigment-create.component';
import { AssigmentReadComponent } from '@bootcamp-elearning/pages/admin/assignment/read/assigment-read.component';

const routes: Routes = [
  { path: 'assignments', component: AssigmentReadComponent },
  { path: 'assignments/new', component: AssigmentCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssignmentRoutingModule { }

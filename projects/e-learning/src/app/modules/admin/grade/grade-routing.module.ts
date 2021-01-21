import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GradeCreateComponent } from '@bootcamp-elearning/pages/admin/grade/create/grade-create.component';
import { GradeReadComponent } from '@bootcamp-elearning/pages/admin/grade/read/grade-read.component';

const routes: Routes = [
  { path: 'grades', component: GradeReadComponent },
  { path: 'grades/new', component: GradeCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GradeRoutingModule { }

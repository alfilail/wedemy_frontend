import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubmissionStatusCreateComponent } from '@bootcamp-elearning/pages/admin/submission-status/create/submission-status-create.component';
import { SubmissionStatusReadComponent } from '@bootcamp-elearning/pages/admin/submission-status/read/submission-status-read.component';

const routes: Routes = [
  { path: 'submission-status', component: SubmissionStatusReadComponent },
  { path: 'submission-status/new', component: SubmissionStatusCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubmissionStatusRoutingModule { }

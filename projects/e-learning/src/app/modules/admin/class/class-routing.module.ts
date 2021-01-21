import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClassCreateComponent } from '@bootcamp-elearning/pages/admin/class/create/class-create.component';
import { ClassReadComponent } from '@bootcamp-elearning/pages/admin/class/read/class-read.component';

const routes: Routes = [
  { path: 'class', component: ClassReadComponent },
  { path: 'class/new', component: ClassCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }

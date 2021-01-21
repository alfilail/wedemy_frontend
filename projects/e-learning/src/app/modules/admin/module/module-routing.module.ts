import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleCreateComponent } from '@bootcamp-elearning/pages/admin/module/create/module-create.component';
import { ModuleReadComponent } from '@bootcamp-elearning/pages/admin/module/read/module-read.component';

const routes: Routes = [
  { path: 'modules', component: ModuleReadComponent },
  { path: 'modules/new', component: ModuleCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleRoutingModule { }

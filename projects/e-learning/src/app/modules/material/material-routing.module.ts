import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForumComponent } from '@bootcamp-elearning/pages/material/forum/forum.component';
import { MaterialReadComponent } from '@bootcamp-elearning/pages/material/read/material-read.component';

const routes: Routes = [
  {
    path: 'material/:idDetailModuleRegistration',
    component: MaterialReadComponent,
    children: [
      { path: 'forum', component: ForumComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }

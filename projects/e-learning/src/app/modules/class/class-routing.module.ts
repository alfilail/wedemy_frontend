import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassDetailComponent } from '../../pages/class/detail/class-detail.component';
import { InstructorComponent } from '../../pages/class/instructor/instructor.component';
import { MaterialAddComponent } from '../../pages/class/material/add/material-add.component';
import { ModuleComponent } from '../../pages/class/module/module.component';
import { ReportReadComponent } from '../../pages/class/report/read/report-read.component';

const routes: Routes = [
  {
    path: 'class',
    component: ClassDetailComponent,
    children: [
      { path: 'enrolled', component: ModuleComponent },
      { path: 'instructor', component: InstructorComponent },
      { path: 'report', component: ReportReadComponent },
      { path: 'add-material', component: MaterialAddComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }

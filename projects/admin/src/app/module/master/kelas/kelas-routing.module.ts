import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateKelasComponent } from '@bootcamp-admin/pages/kelas/create-kelas/create-kelas.component';
import { KelasComponent } from '@bootcamp-admin/pages/kelas/kelas.component';


const routes: Routes = [
  {
    path: 'kelas',
    component: KelasComponent
  },
  {
    path: 'kelas/:activity',
    component: CreateKelasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KelasRoutingModule { }

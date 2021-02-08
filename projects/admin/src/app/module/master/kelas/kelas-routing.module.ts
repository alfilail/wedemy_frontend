import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateKelasComponent } from '@bootcamp-admin/pages/kelas/create-kelas/create-kelas.component';
import { DisableClassComponent } from '@bootcamp-admin/pages/kelas/disable-class/disable-class.component';
import { KelasComponent } from '@bootcamp-admin/pages/kelas/kelas.component';


const routes: Routes = [
  {
    path: 'kelas-aktif',
    component: KelasComponent
  },
  {
    path: 'kelas/:activity',
    component: CreateKelasComponent
  },
  {
    path: 'kelas-nonaktif',
    component: DisableClassComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KelasRoutingModule { }

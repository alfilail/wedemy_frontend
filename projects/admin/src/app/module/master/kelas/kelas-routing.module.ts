import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateKelasComponent } from '../../../pages/kelas/create-kelas/create-kelas.component';
import { KelasComponent } from '../../../pages/kelas/kelas.component';


const routes: Routes = [
  {
    path: 'kelas',
    component: KelasComponent
  },
  {
    path: 'tambah-kelas',
    component: CreateKelasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class KelasRoutingModule { }

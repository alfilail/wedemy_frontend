import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleRoutingModule } from './module-routing.module';
import { ModuleReadComponent } from '../../../pages/admin/module/read/module-read.component';
import { ModuleCreateComponent } from '../../../pages/admin/module/create/module-create.component';


@NgModule({
  declarations: [ModuleReadComponent, ModuleCreateComponent],
  imports: [
    CommonModule,
    ModuleRoutingModule
  ]
})
export class ModuleModule { }

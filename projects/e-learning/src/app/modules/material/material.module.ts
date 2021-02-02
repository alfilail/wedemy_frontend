import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialReadComponent } from '../../pages/material/read/material-read.component';
import { AnswerComponent } from '../../pages/material/answer/answer.component';
import { ForumComponent } from '../../pages/material/forum/forum.component';
import { PresenceAssignmentComponent } from '../../pages/material/presence-assignment/presence-assignment.component';
import { TableModule } from 'primeng/table';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    MaterialReadComponent,
    AnswerComponent,
    ForumComponent,
    PresenceAssignmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialRoutingModule,
    TableModule,
    EditorModule,
    FormsModule
  ]
})
export class MaterialModule { }

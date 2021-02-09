import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkeletonModule } from 'primeng/skeleton';

import { MaterialRoutingModule } from './material-routing.module';
import { MaterialReadComponent } from '../../pages/material/read/material-read.component';
import { AnswerComponent } from '../../pages/material/answer/answer.component';
import { ForumComponent } from '../../pages/material/forum/forum.component';
import { TableModule } from 'primeng/table';
import { EditorModule } from 'primeng/editor';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DateAgoPipe } from '@bootcamp-elearning/shared/pipes/date-ago.pipe';
import { PresenceComponent } from '../../pages/material/presence/presence.component';
import { AssignmentComponent } from '../../pages/material/assignment/assignment.component';


@NgModule({
  declarations: [
    MaterialReadComponent,
    AnswerComponent,
    ForumComponent,
    DateAgoPipe,
    PresenceComponent,
    AssignmentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialRoutingModule,
    TableModule,
    EditorModule,
    FormsModule,
    SkeletonModule
  ]
})
export class MaterialModule { }

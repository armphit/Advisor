import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ManageDataComponent } from './manage-data/manage-data.component';
import { GroupComponent } from './manage-data/group/group.component';
import { StudentComponent } from './manage-data/student/student.component';
import { TeacherComponent } from './manage-data/teacher/teacher.component';
import { SharedModules } from 'src/app/shared-modules';



@NgModule({
  declarations: [ManageDataComponent, GroupComponent, StudentComponent, TeacherComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModules

  ]
})
export class AdminModule { }

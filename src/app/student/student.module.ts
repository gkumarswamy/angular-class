import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentformComponent } from './studentform/studentform.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'student-list', component:StudentListComponent},
  {path:'add-student', component:StudentformComponent},
  {path:'edit-student/:id', component:StudentformComponent},
];




@NgModule({
  declarations: [
    StudentListComponent,
    StudentformComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class StudentModule { }

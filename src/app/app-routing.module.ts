import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonListComponent } from './person-list/person-list.component';
import { PersonEditComponent } from './person-edit/person-edit.component';
import { PersonDeleteComponent } from './person-delete/person-delete.component';

const routes: Routes = [
  { path: '', redirectTo: '/people', pathMatch: 'full' },

  { path: 'people', component: PersonListComponent },

  { path: 'person-edit/:id', component: PersonEditComponent },

  { path: 'person-delete/:id', component: PersonDeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

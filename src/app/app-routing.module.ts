import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { MainLayoutComponent } from './notes/main-layout/main-layout.component';
import { NoteHomeComponent } from './notes/note-home/note-home.component';
import { Game1Component } from './game1/game1.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: 'rockpaper',
    component: Game1Component,
  },
  {
    path: 'notes',
    component: MainLayoutComponent,
    children: [
      {
        path: '',
        component: NoteHomeComponent,
      },
      {
        path: 'new',
        component: NoteDetailsComponent,
      },
      {
        path: ':id',
        component: NoteDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
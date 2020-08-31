import { MainViewComponent } from './kanban/main-view/main-view.component';
import { EditItemModalComponent } from './budget/edit-item-modal/edit-item-modal.component';
import { AddItemFormComponent } from './budget/add-item-form/add-item-form.component';
import { BudgetItemCardComponent } from './budget/budget-item-list/budget-item-card/budget-item-card.component';
import { BudgetItemListComponent } from './budget/budget-item-list/budget-item-list.component';
import { MainPageComponent } from './budget/main-page/main-page.component';
import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { NoteCardComponent } from './notes/note-card/note-card.component';
import { NoteHomeComponent } from './notes/note-home/note-home.component';
import { MainLayoutComponent } from './notes/main-layout/main-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Game1Component } from './game1/game1.component';

import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    AppComponent,
    Game1Component,
    MainLayoutComponent,
    NoteHomeComponent,
    NoteCardComponent,
    NoteDetailsComponent,
    MainPageComponent,
    BudgetItemListComponent,
    BudgetItemCardComponent,
    AddItemFormComponent,
    EditItemModalComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

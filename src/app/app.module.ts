import { NoteDetailsComponent } from './notes/note-details/note-details.component';
import { NoteCardComponent } from './notes/note-card/note-card.component';
import { NoteHomeComponent } from './notes/note-home/note-home.component';
import { MainLayoutComponent } from './notes/main-layout/main-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Game1Component } from './game1/game1.component';

@NgModule({
  declarations: [
    AppComponent,
    Game1Component,
    MainLayoutComponent,
    NoteHomeComponent,
    NoteCardComponent,
    NoteDetailsComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AgGridModule } from 'ag-grid-angular';
import { AppComponent } from './app.component';
import { MatDialogModule } from '@angular/material/dialog';
import { QuillModule } from "ngx-quill";
import { NoteDialogComponent } from './note-dialog/note-dialog.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    NoteDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgGridModule,
    QuillModule,
    MatDialogModule,
    BrowserAnimationsModule
  ],
  exports: [QuillModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { NoteDialogComponent } from './note-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    NoteDialogComponent
  ],
  imports: [
    BrowserModule,
	HttpClientModule,
	AgGridModule,
	MatDialogModule,
	BrowserAnimationsModule,
	MatButtonModule
  ],
  providers: [],
  bootstrap: [NoteDialogComponent]
})
export class NoteDialogModule { }

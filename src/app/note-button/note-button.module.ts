import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NoteButton } from './note-button.component';

@NgModule({
	declarations: [NoteButton],
	imports: [
		MatDialogModule,
		MatButtonModule
	],
	bootstrap: [NoteButton]
})

export class NoteDialogRendererModule { }
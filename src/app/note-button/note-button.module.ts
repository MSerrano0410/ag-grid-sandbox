import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { NoteButtonRenderer } from './note-button.component';

@NgModule({
	declarations: [NoteButtonRenderer],
	imports: [
		MatDialogModule,
		MatButtonModule
	],
	bootstrap: [NoteButtonRenderer]
})

export class NoteDialogRendererModule { }
import { Component, Inject } from '@angular/core';
import { QUILL_CONFIG_TOKEN, QuillConfig } from 'ngx-quill';
import { MatDialogRef } from "@angular/material/dialog";

@Component({
	selector: "note-dialog",
	templateUrl: "./note-dialog.component.html",
	styleUrls: ["./note-dialog.component.scss"]
})

export class NoteDialogComponent {
	constructor(public dialogRef: MatDialogRef<NoteDialogComponent>, 
		@Inject(QUILL_CONFIG_TOKEN) config: QuillConfig) { 
	}
	
	onClose(): void {
		this.dialogRef.close();
	}
}
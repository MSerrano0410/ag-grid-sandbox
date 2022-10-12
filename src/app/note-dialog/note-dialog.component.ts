import { Component, Inject } from '@angular/core';
import { QUILL_CONFIG_TOKEN, QuillConfig } from 'ngx-quill';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Study } from '../study';

@Component({
	selector: "note-dialog",
	templateUrl: "./note-dialog.component.html",
	styleUrls: ["./note-dialog.component.scss"]
})

export class NoteDialogComponent {
	constructor(public dialogRef: MatDialogRef<NoteDialogComponent>, 
		@Inject(MAT_DIALOG_DATA) public data: Study,
		@Inject(QUILL_CONFIG_TOKEN) config: QuillConfig) {
			console.log(data);
	}
	
	onClose(): void {
		this.dialogRef.close();
	}
}
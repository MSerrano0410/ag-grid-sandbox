import { Component, Inject } from '@angular/core';
import { QUILL_CONFIG_TOKEN, QuillConfig } from 'ngx-quill';
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { Study } from '../study';
import { EditorChangeContent, EditorChangeSelection } from 'ngx-quill'

@Component({
	selector: "note-dialog",
	templateUrl: "./note-dialog.component.html",
	styleUrls: ["./note-dialog.component.scss"]
})

export class NoteDialogComponent {
	public noteHtml: any;
	constructor(public dialogRef: MatDialogRef<NoteDialogComponent>, 
		@Inject(MAT_DIALOG_DATA) public data: Study,
		@Inject(QUILL_CONFIG_TOKEN) config: QuillConfig) {
			this.noteHtml = "";
	}
	
	onClose(): void {
		this.dialogRef.close();
	}

	saveChangedNote(event: EditorChangeContent | EditorChangeSelection) {
		this.noteHtml = event.editor.root.innerHTML;
	}

	saveNote() {
		window.localStorage.setItem(this.data.study_id, this.noteHtml);
		this.dialogRef.close();
	}

	setInitialNote($event: any) {
		let savedNote = this.getNote();
		if (savedNote != null) {
			$event.root.innerHTML = savedNote;
		}
	}

	getNote(): any {
		return window.localStorage.getItem(this.data.study_id);
	}
}
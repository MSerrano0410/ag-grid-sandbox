import { Component } from "@angular/core";
import { MatDialogRef } from "@angular/material/dialog";

@Component({
	selector: "note-dialog",
	templateUrl: "./note-dialog.component.html",
	styleUrls: ["./note-dialog.component.scss"]
})

export class NoteDialogComponent {
	constructor(public dialogRef: MatDialogRef<NoteDialogComponent>) { 
		
	}
	
	onClose(): void {
		this.dialogRef.close();
	}
}
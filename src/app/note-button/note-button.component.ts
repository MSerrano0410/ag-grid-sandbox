import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { NoteDialogComponent } from "../note-dialog/note-dialog.component";
import { MatDialog } from "@angular/material/dialog";

@Component({
  selector: 'note-button',
  templateUrl: './note-button.component.html',
  styleUrls: [
  './note-button.component.scss']
})

/**
ot	Class to render button for adding notes
*/
export class NoteButtonRenderer implements ICellRendererAngularComp {
	params!: any;
	
	agInit(params: ICellRendererParams): void {
		this.params = params;
	}
	
	//allows button to be rerendered on page refresh
	refresh(params: ICellRendererParams): boolean {
		return true;
	}
	
	openNoteDialog(): void {
		const noteDialogRef = this.params.dialog.open(NoteDialogComponent);
		//TODO: Find way to get ID tied to dialog instance.
	}
}

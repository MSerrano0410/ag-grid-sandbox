import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";
import { NoteDialogComponent } from "../note-dialog/note-dialog.component";
import { Study } from "../study";

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
		let currentStudy = this.getCurrentStudy(this.params.data);
		let noteDialogRef = this.params.dialog.open(NoteDialogComponent, {
			data: currentStudy
		});
	}

	getCurrentStudy(data: any): any {
		return new Study (data.test, data.study_day, data.unit);
	}
}

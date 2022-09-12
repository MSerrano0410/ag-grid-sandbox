import { Component } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";
import { ICellRendererParams } from "ag-grid-community";

@Component({
  selector: 'note-button',
  templateUrl: './note-button.component.html',
  styleUrls: ['./note-button.component.scss']
})

/**
	Class to render button for adding a note.
*/
export class NoteButtonRenderer implements ICellRendererAngularComp {	
	agInit(params: ICellRendererParams): void {
		
	}
	
	//allows button to be rerendered on page refresh
	refresh(params: ICellRendererParams): boolean {
		return true;
	}
	
	openNoteDialog() {
		alert("NOTE BUTTON CLICKED!");
		//TODO: Add MatDialog instance creation/rendering here
	}
}

//TODO: https://stackoverflow.com/questions/62878474/how-to-attach-an-angular-modal-to-a-button-click
//Finish making this button and tie it to the cellRenderer in empty field in main app.component.ts
//COMMIT THE ABOVE ONCE DONE!11
//Next, use MatDialog and above link to make a separate dialog component and call an instance of it
//On button click.
//After that, you can work on the content of said dialog i.e an instance of ngx-quill


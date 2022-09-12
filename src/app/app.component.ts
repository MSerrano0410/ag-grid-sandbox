import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { NoteButtonRenderer } from "./note-button/note-button.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Studies and Tests';
  
  public studyColumnDefs: ColDef[] = [
	{field: 'test', headerName: 'Test'},
	{field: 'study_day', headerName: 'Study Day'},
	{field: 'unit', headerName: 'Unit'},
	{field: 'add_note', headerName: '', cellRenderer: NoteButtonRenderer}
  ];
  
  //props are dynamic, this is how it initially loads
  public defaultColumnAttributes: ColDef = {
	sortable: true,
	filter: true
  };
  
  //default data that's displayed in grid.
  //note that this allows ANY datatype; bad design
  public rowData$!: Observable<any[]>;
  
  //this is used to access the Grid API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  
  constructor(private http: HttpClient) {}
  
  /*
	local call for demo only
	TODO: Implement Java web service to get
	prod data from a Springboot H2 DB instance
	TODO: Error handling for this call.
  */
  onGridReady(params: GridReadyEvent) {
	this.rowData$ = this.http.get<any[]>('assets/json/ag-grid-sample-data.json');
  }
  
  //example of a custom button function we can use
  clearSelection(): void {
	this.agGrid.api.deselectAll();
  }
}

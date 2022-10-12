import { HttpClient } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { NoteButtonRenderer } from "./note-button/note-button.component";
import { Observable } from 'rxjs';
import { MatDialog } from "@angular/material/dialog";
import { Study } from './study';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Studies and Tests';
  studyData: Study[] = [];
  rowData$!: Observable<Study[]>;
  studyColumnDefs: ColDef[] = [];
  defaultColumnAttributes: ColDef;
   
  //this is used to access the Grid API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  
  constructor(private http: HttpClient, private dialog: MatDialog) {
    this.setRowData();
    this.defaultColumnAttributes = this.setDefaultColumnAttributes();
  }

  setRowData() {
    this.rowData$ = this.getStudies();
    this.rowData$.subscribe(studies => {
    this.setStudyData(studies);
    this.setStudyColumnDefs();
  });
  }
  
  //Note: <Study>[] only defines the JSON field mapping, it does
  //not map each JSON element to a Study object. That is done in
  //the subscribe function
  getStudies() {
   return this.http.get<Study[]>('assets/json/ag-grid-sample-data.json'); 
  }
  
  setStudyData(studies: Study[]) {
    studies.forEach(study => {
      var currentStudy: Study = new Study(study.test, study.study_day, study.unit);
      this.studyData.push(currentStudy);
    });
  }

  clearSelection(): void {
	this.agGrid.api.deselectAll();
  }

  setStudyColumnDefs(): void {
    this.studyColumnDefs = [
      {field: 'test', headerName: 'Test'},
      {field: 'study_day', headerName: 'Study Day'},
      {field: 'unit', headerName: 'Unit'},
      {
        field: 'add_note', 
        headerName: '', 
        cellRenderer: NoteButtonRenderer, 
        cellRendererParams: {
          studyData: this.studyData,
          dialog: this.dialog
        }}
      ];
  }

  setDefaultColumnAttributes(): ColDef {
    return {
      sortable: true,
      filter: true
      }
  }
}

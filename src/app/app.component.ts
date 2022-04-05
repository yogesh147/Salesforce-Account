import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { GridReadyEvent } from 'ag-grid-community';
import { SampleData } from './SampleData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Account';


  constructor(private http: HttpClient,
    private sampleData: SampleData) { }
  columnDefs = [{ headerName: "Account Name", field: "Name" },
  { headerName: "Industry", field: "attributes.type" },
  { headerName: "Phone", field: "Phone" },
  { headerName: "Type", field: "Type" }];

  defaultColDef = {
    editable: true,
    sortable: true,
    resizable: true,
    filter: true,
    flex: 1,
    minWidth: 100
  };

  rowData: any = [];

  onGridReady(params: GridReadyEvent) {
    let headers = {
      'Access-Control-Allow-Origin': '*',
      'Authorization': 'Bearer 00D5e000002UOJV!ARwAQNb89.MYJ4TOnCuJiPs5pP5JAkwvWCmSVcJIFMEAMVuS_hYeShN3I1D0_Hff1fLJimShj_fVk5x8QDQ6qy_gFe3HoYWt',
      'Cookie': 'BrowserId=nKP5XfCUEeuL-b0SbAcHNg; CookieConsentPolicy=0:0',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
      'Accept': '*/*'
    }

    let url = 'https://xceedesolutions2-dev-ed.my.salesforce.com/services/data/v51.0/query/?q=SELECT%20Id,Name,%20Phone,%20Type%20FROM%20Account';

    this.http
      .get<any[]>(url, { headers })
      .subscribe((data :any) => (this.rowData = data.records || []));
  }


}

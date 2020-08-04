import { Component, Input, ViewChild, SimpleChanges, OnChanges, AfterViewInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';

import { UserInfo } from '../models/search-result.model';

@Component({
  selector: 'app-search-result-table',
  templateUrl: './search-result-table.component.html',
  styleUrls: ['./search-result-table.component.css']
})
export class SearchResultTableComponent implements OnChanges, AfterViewInit {

  @Input() searchResult: UserInfo[] = [];
  @ViewChild(MatTable) table: MatTable<UserInfo>;
  dataSource: MatTableDataSource<UserInfo> = new MatTableDataSource<UserInfo>([]);
  columnNames: string[] = ['firstName', 'lastName', 'email'];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchResult != null) {
      this.dataSource.data = changes.searchResult.currentValue;
    }
  }

  ngAfterViewInit(): void {
    this.table.dataSource = this.dataSource;
  }
}

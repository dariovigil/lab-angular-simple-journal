import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css']
})
export class EntryListComponent implements OnInit {
  journalEntries:Array<Object> = [];
  constructor(
    public journalService : JournalService,

  ) {
    this.journalService.getJournalEntries().subscribe(entries => {
        this.journalEntries = entries;
    })
   }

  ngOnInit() {

  }

}

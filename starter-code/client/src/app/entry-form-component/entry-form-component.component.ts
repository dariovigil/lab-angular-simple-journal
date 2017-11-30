import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-entry-form-component',
  templateUrl: './entry-form-component.component.html',
  styleUrls: ['./entry-form-component.component.css']
})
export class EntryFormComponentComponent implements OnInit {
  newEntry: Object = {};
  constructor(
    public journalService: JournalService,
    public route: ActivatedRoute,
    public router: Router
  ) {

  }
  ngOnInit() { }
  addEntry() {
    this.journalService.createNewEntry(this.newEntry).subscribe(() => {
      this.router.navigate(['/']);
    })
  }
}

import { Component, OnInit } from '@angular/core';
import {JournalService} from '../../services/journal.service';
import {ActivatedRoute, Router} from '@angular/router';



@Component({
  selector: 'app-single-entry',
  templateUrl: './single-entry.component.html',
  styleUrls: ['./single-entry.component.css']
})
export class SingleEntryComponent implements OnInit {
  entry:Object;
  constructor(
    public router:Router,
    public journalService:JournalService,
    public route:ActivatedRoute) {
    route.params.subscribe(params => {
      this.journalService.getSingleEntry(params['id'])
        .subscribe(entry => this.entry = entry);
    })
    }

  ngOnInit() {
  }

}

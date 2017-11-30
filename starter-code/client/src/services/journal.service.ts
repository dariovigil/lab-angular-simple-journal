import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { Http, Headers, RequestOptions } from '@angular/http';


const DOMAIN = "http://localhost:3000";
const PATH = "/api/journal-entries";
const BASEURL = `${DOMAIN}${PATH}`;

@Injectable()
export class JournalService {
  constructor(private http: Http) {}

  getJournalEntries():Observable<any> {
    return this.http.get(BASEURL)
                    .map(res => res.json());
  }

  getSingleEntry(id):Observable<any> {
    return this.http.get(`${BASEURL}/${id}`)
                    .map(res => res.json());
  }

  createNewEntry(newEntry) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(`${BASEURL}`, JSON.stringify(newEntry), options)
                    .map(res => res.json());

  }
}

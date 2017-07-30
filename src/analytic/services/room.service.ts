import { Injectable } from '@angular/core';

import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class RoomService {

 //private URL = 'http://localhost';
  private URL = 'http://ec2-34-225-194-59.compute-1.amazonaws.com';

  private roomsURL = this.URL + ':3000/rooms';  // URL to web API
  private filteredRoomsURL = this.URL + ':3000/rooms/filter'
  constructor(private http: Http) { }

  getRooms(): Observable<any[]> {
    return this.http.get(this.roomsURL)
      .map(this.extractData)
      .catch(this.handleError);
  }

  getFilteredRooms(body) {
  	return this.http.post(this.filteredRoomsURL, body)
	  	.map((res: Response) => res.json())
		  .catch((error:any) => Observable.throw(error.json().error || 'Server Error'));  
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }



}

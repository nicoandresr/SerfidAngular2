import { Injectable } from 'angular2/core'
import { Reading } from './reading'
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ReadingService {

    private _server = 'http://localhost:7000';
    private _readings = this._server + '/readings';

    constructor(private _http: Http){ }

    public getReadings(): Observable<Reading[]>{
        return this._http.get(this._readings)
            .map((response: Response) => <Reading[]>response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

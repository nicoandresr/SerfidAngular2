import { Injectable } from 'angular2/core'
import { Tag } from './tag'
import { Http, Response, Headers, RequestOptions } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagService {

    private _server = 'http://localhost:7000';
    private _devices = this._server + '/devices';
    private _deviceRegister = this._server + '/deviceRegister';

    constructor(private _http: Http){ }

    public getTags(): Observable<Tag[]>{
        return this._http.get(this._devices)
            .map((response: Response) => <Tag[]>response.json())
            .catch(this.handleError);
    }

    public registerTag(tag: Tag): Observable<string> {
        let headers = new Headers({ 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        let data = JSON.stringify(tag);

        return this._http.post(this._deviceRegister, data, options)
            .map((response: Response) => response)
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}

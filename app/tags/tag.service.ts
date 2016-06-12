import { Injectable } from 'angular2/core'
import { ITag } from './tag'
import { Http, Response } from 'angular2/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagService {

    private _tagUrl = 'api/tags/tags.json';

    constructor(private _http: Http){ }

    getTags(): Observable<ITag[]>{
        return this._http.get(this._tagUrl)
            .map((response: Response) => <ITag[]>response.json())
            .do(data => console.log("All: " + JSON.stringify(data)))
            .catch(this.handleError);
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
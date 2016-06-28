import { Component } from 'angular2/core'
import { Router } from 'angular2/router';
import { TagService } from './tag.service'
import { ITag } from './tag';

@Component({
    selector: 'pm-register',
    styleUrls: ['./app/tags/tag-register.component.css'],
    templateUrl: './app/tags/tag-register.component.html'
})
export class TagRegisterComponent{

    pageTitle: string = 'Register an new device';
    device: ITag

    constructor(private _tagService: TagService,
                private _router: Router){ }

    onSave(): void{
        console.log('device saved: ' + JSON.stringify(this.device));
    }

    onGoToList(): void {
        this._router.navigate(['Tags']);
    }
}
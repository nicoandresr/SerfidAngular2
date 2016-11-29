import { Component } from 'angular2/core'
import { FormBuilder, Validators } from 'angular2/common';
import { Router } from 'angular2/router';
import { TagService } from './tag.service'
import { Tag } from './tag';

@Component({
    selector: 'pm-register',
    styleUrls: ['./app/tags/tag-register.component.css'],
    templateUrl: './app/tags/tag-register.component.html'})
export class TagRegisterComponent{

    public pageTitle: string = 'Register an new device';
    public tag: Tag; 

    constructor(private _tagService: TagService,
        private _router: Router,
        private _fb: FormBuilder) {
        this.tag  = new Tag();
    }

    public doRegister(event): void {
        this._tagService.registerTag(this.tag)
                .subscribe(
                    result => console.log(result),
                    error => console.log(error));

        event.preventDefault();
    }
}

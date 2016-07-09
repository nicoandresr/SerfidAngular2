import { Component } from 'angular2/core'
import { FormBuilder, Validators } from 'angular2/common';
import { Router } from 'angular2/router';
import { TagService } from './tag.service'
import { Device } from './device';

@Component({
    selector: 'pm-register',
    styleUrls: ['./app/tags/tag-register.component.css'],
    templateUrl: './app/tags/tag-register.component.html'
})
export class TagRegisterComponent{

    public pageTitle: string = 'Register an new device';
    public device: Device; 

    constructor(private _tagService: TagService,
        private _router: Router,
        private _fb: FormBuilder) {
        this.device = new Device();
    }

    public doRegister(event): void {
        console.log(this.device);
        event.preventDefault();
    }
}

import { Component } from 'angular2/core'
import { FormBuilder, Validators } from 'angular2/common';
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
                private _router: Router
		private _fb: FormBuilder) {
		this.registerForm = this._fb.group({
			tag: ['', Validators.required],
			device: [''],
			displayName: [''],
			detail: [''],
			price: [0],
			rating: [0],
			imageUrl: [''] 
		});
	}

    doRegister(event): void {
	console.log(this.registerForm.value);
        event.preventDefault();
    }
}

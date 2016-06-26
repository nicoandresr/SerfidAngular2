import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { ITag } from './tag';
import { StarComponent } from '../shared/star.component'
import { TagFilterPipe } from './tag-filter.pipe'
import { TagService } from './tag.service'

@Component({
    selector: 'pm-tags',
    templateUrl: 'app/tags/tag-list.component.html',
    styleUrls: ['app/tags/tag-list.component.css'],
    directives: [StarComponent, ROUTER_DIRECTIVES],
    pipes: [ TagFilterPipe ]
})

export class TagListComponent implements OnInit {
    pageTitle: string = 'Device List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    tags: ITag[];
    errorMessage: string;

    constructor(private _tagService: TagService){ }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._tagService.getTags()
                .subscribe(
                    tags => this.tags = tags,
                    error => this.errorMessage = <any>error);
    }

    onRatingClicked(message: string): void {
        this.pageTitle = 'Tags List: ' + message;
    }
}
import { Component, OnInit } from 'angular2/core';
import { ROUTER_DIRECTIVES } from 'angular2/router';
import { Reading } from './reading';
import { StarComponent } from '../shared/star.component'
import { ReadingFilterPipe } from './tag-reading.pipe'
import { ReadingService } from './reading.service'

@Component({
    selector: 'pm-readings',
    templateUrl: 'app/tags/tag-readings.component.html',
    styleUrls: ['app/tags/tag-readings.component.css'],
    directives: [StarComponent, ROUTER_DIRECTIVES],
    pipes: [ ReadingFilterPipe ]
})
export class TagReadingsComponent implements OnInit {
    pageTitle: string = 'Readings Log';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string;
    readings: Reading[];
    errorMessage: string;

    constructor(private _readingService: ReadingService){ }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        this._readingService.getReadings()
                .subscribe(
                    readings => this.readings = readings,
                    error => this.errorMessage = <any>error);
    }
}
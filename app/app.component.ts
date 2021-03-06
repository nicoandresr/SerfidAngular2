import { Component } from 'angular2/core';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS, RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';
import 'rxjs/Rx'; // Load all features

import { TagListComponent } from './tags/tag-list.component';
import { TagReadingsComponent } from './tags/tag-readings.component';
import { WelcomeComponent } from './home/welcome.component';
import { TagService } from './tags/tag.service'
import { ReadingService } from './tags/reading.service'
import { TagDetailComponent } from './tags/tag-detail.component';

@Component({
    selector: 'pm-app',
    template: `
    <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['Tags']">Device list</a></li>
                    <li><a [routerLink]="['Readings']">Readings log</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        <div>
     </div>     
    `,
    directives: [ROUTER_DIRECTIVES],
    providers: [TagService,
                ReadingService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})

@RouteConfig([
    { path: '/welcome', name: 'Welcome', component: WelcomeComponent, useAsDefault: true },
    { path: '/tag/list', name: 'Tags', component: TagListComponent },
    { path: '/tag/readings', name: 'Readings', component: TagReadingsComponent },
    { path: '/tag/:id', name: 'TagDetail', component: TagDetailComponent }
])
export class AppComponent {
    pageTitle: string = 'SERFID'; 
}
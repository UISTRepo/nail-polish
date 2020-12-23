import { Component } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    title = 'nail-polish';

    currentPage: string = null;

    constructor(
        private router: Router
    ) {

        let someVar = {
            'id': 1,
            'name': 'Admin'
        };

        router.events.subscribe((val) => {
            if(val instanceof NavigationEnd){
                this.currentPage = val.url;
            }
        });
    }

}

import { Component, OnInit } from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {GlobalService} from '../../sevices/global/global.service';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

    constructor(
        private router: Router,
        private globalService: GlobalService
    ) {
        this.globalService.currentPage = this.router.url;
    }

    ngOnInit(): void {
    }

}

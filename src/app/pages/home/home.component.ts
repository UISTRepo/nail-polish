import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {GlobalService} from '../../sevices/global/global.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    constructor(
        private router: Router,
        private globalService: GlobalService
    ) {
        this.globalService.currentPage = this.router.url;
    }

    ngOnInit(): void {
    }

    scheduleTime(){

    }

}

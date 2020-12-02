import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {

    private currentPageValue: string = null;

    get currentPage(){
        return this.currentPageValue;
    }

    set currentPage(value){
        this.currentPageValue = value;
    }

    constructor() {
        console.log('the service is created');
    }
}

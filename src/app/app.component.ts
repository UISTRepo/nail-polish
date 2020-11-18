import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})

export class AppComponent {

    title = 'nail-polish';

    openTermsModal(){
        // $('#myModal').modal('show')
    }

    openPrivacyPolicy(){
        console.log('privacy');

    }
}

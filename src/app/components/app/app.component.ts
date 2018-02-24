import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    public goToTumblr() {
        window.open('http://daydreamsonvinyl.tumblr.com', '_blank');
    }

}


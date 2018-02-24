import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'app';

    public goToGithub() {
        window.open('https://github.com/sbesozzi', '_blank');
    }

    public goToLinkedin() {
        window.open('https://www.linkedin.com/in/sarahbesozzi', '_blank');
    }

    public goToInstagram() {
        window.open('https://www.instagram.com/daydreamsonvinyl/', '_blank');
    }

    public goToTumblr() {
        window.open('http://daydreamsonvinyl.tumblr.com', '_blank');
    }

    public goToPinterest() {
        window.open('https://www.pinterest.com/sarahbesozzi/', '_blank');
    }

}


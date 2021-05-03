import { Component, OnInit } from '@angular/core';
import { Http, Jsonp } from '@angular/http';

import { InstagramService } from '../../services/instagram.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';
    public mobileDevice: boolean;
    public photos;

    constructor(
        private _http: Http,
        private _jsonp: Jsonp,
        private _instagramService: InstagramService
    ) { }

    ngOnInit() {
        this.mobileDevice = this.getMobileStatus();

        // this._instagramService.getFeed().subscribe((data) => {
        //     this.photos = data.data;
        // },
        //     err => {
        //         console.log('token err: ', err);
            // });

    }

    public getMobileStatus() {
        if (this.mobileDevice === undefined) {
            this.mobileDevice = (window.innerWidth <= 800) ? true : false;
            return this.mobileDevice;
        } else {
            return this.mobileDevice;
        }
    }

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
        window.open('https://www.pinterest.com/sarahbesozzi/pins/', '_blank');
    }

}

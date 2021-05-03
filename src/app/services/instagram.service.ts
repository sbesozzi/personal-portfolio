import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class InstagramService {
  private headers = new Headers({
    'Content-Type': 'application/json'
  });

  constructor(
    private _http: Http
  ) { }

  public getFeed() {
    // tslint:disable-next-line:max-line-length
    return this._http.get('https://api.instagram.com/v1/users/842334996/media/recent/?access_token=842334996.4023a89.13ff5b38094e4400a7116194c64c9fb3&callback=?')
      .map(response => {
        return response.json();
      });
  }

}

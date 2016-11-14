import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the InstagramService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class InstagramService {

  constructor(private http: Http){}

  getMedia() {
    return this.http.get('https://api.instagram.com/v1/users/277045735/media/recent/?access_token=726772142.6220a2a.0ca234817f3e4c86a6c2d17402491942')
  }

}

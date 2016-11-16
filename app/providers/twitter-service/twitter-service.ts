import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class TwitterService {
  bearer: string = "Bearer AAAAAAAAAAAAAAAAAAAAAI9kxwAAAAAAubQ8jDjTa5GQAZ0oz1z0927QIJQ%3Dp2NTjPTjsLrkJ9BrWh3XjCkC5dTWcRwZ2vcM6526PQq5y1gLoy";
  header: any = {
  	"Content-Type" :  "application/x-www-form-urlencoded;charset=UTF-8",
  	"Authorization" : `Basic + ${this.bearer}`
  }
  constructor(private http: Http) {}

  getTimeline() {
    return this.http.get('http://api.twitter.com/1.1/statuses/user_timeline.json?count=10', {
      headers: this.header
    });

  }
}


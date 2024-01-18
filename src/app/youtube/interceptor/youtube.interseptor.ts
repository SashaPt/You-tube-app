/* eslint-disable @typescript-eslint/no-explicit-any */
import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ShortenInterceptor implements HttpInterceptor {
  private HTTP_URL = 'https://www.googleapis.com/youtube/v3/';

  private HTTP_KEY = 'AIzaSyBbXjokqgkVnuk0Tg9r9z9NxKE4HJTMEFg';

  // eslint-disable-next-line class-methods-use-this
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const youtubeReq = req.clone({
      url: req.url.replace('BASE_URL/', this.HTTP_URL),
      setParams: {
        key: this.HTTP_KEY,
      },
    });
    return next.handle(youtubeReq);
  }
}

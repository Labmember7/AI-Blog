import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache = new Map<string, HttpResponse<any>>();

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method !== 'GET') {
      return next.handle(request);
    }
    if (request.headers.has('Interceptor-Skip')) {
      const headers = request.headers.delete('Interceptor-Skip');
      return next.handle(request.clone({ headers }));
    }
    const cachedResponse = this.cache.get(request.urlWithParams);
    if (cachedResponse) {
      console.log('Returning cached response');
      return of(cachedResponse);
    }

    return next.handle(request).pipe(
      tap(response => {
        if (response instanceof HttpResponse && this.isCacheable(response)) {
          console.log('Caching response');
          this.cache.set(request.urlWithParams, response);
        }
      })
    );
  }

  private isCacheable(response: HttpResponse<any>) {
    return response.status === 200;
  }
}

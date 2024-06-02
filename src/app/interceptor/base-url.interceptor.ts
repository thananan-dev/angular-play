import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment.development';

export const baseUrlInterceptor: HttpInterceptorFn = (req, next) => {
  const headers = new HttpHeaders({
    Accept: 'application/json',
    Authorization: 'Bearer ' + environment.apiKey,
  });

  const reqWithHeader = req.clone({
    headers: headers,
    url: environment.baseMoviesApiUrl + req.url,
  });

  return next(reqWithHeader);
};

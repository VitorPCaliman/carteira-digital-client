import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = sessionStorage.getItem('auth-token');
  const authEndpoints = ['/login', '/register', '/auth'];

  if (authEndpoints.some(endpoint => req.url.includes(endpoint))) {
    return next(req);
  }

  if (authToken) {
    const authReq = req.clone({
      setHeaders: { Authorization: `Bearer ${authToken}` }
    });
    return next(authReq);
  }

  return next(req);
};


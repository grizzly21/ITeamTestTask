import {HttpInterceptorFn} from "@angular/common/http";
import {inject} from "@angular/core";
import {PersistanceService} from "./persistance.service";

export const authInterceptorService: HttpInterceptorFn = (req, next) => {
  const persistanceService: PersistanceService = inject(PersistanceService)

  if(!persistanceService.get('token')) return next(req)

  const setTokenInHeaders = req.clone({
    headers: req.headers.set('X-Token', persistanceService.get('token'))
  })

  return next(setTokenInHeaders);
};

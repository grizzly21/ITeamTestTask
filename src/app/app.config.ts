import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {PersistanceService} from "./services/persistance.service";
import {authInterceptorService} from "./shared/auth.interceptor";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptorService])),
    PersistanceService,
  ]
};
export const apiUrl: string = 'https://user-assessment-api.vercel.app/';

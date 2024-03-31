import {ApplicationConfig} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideHttpClient, withInterceptors} from "@angular/common/http";
import {PersistanceService} from "./shared/services/persistance.service";
import {authInterceptorService} from "./shared/services/auth.interceptor";
import {MAT_DIALOG_DEFAULT_OPTIONS} from "@angular/material/dialog";
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptorService])),
    PersistanceService,
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: true}}, provideAnimationsAsync(), provideAnimationsAsync()
  ]
};
export const apiUrl: string = 'https://user-assessment-api.vercel.app/';

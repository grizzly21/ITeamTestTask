import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient} from "@angular/common/http";
import {PersistanceService} from "./services/persistance.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), PersistanceService]
};

export const apiUrl: string = 'https://user-assessment-api.vercel.app/';

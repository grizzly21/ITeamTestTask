import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {PersistanceService} from "./persistance.service";


export const authGuard: CanActivateFn = (route, state) => {
  const perService: PersistanceService = inject(PersistanceService)
  const router: Router = inject(Router)
  return perService.get('token') ? true : router.navigate(['/login']);
};

export const adminGuard: CanActivateFn = (route, state) => {
  const perService: PersistanceService = inject(PersistanceService)
  const router: Router = inject(Router)
  return perService.get('token') && perService.get('role') === 'Admin' ? true : router.navigate(['/dashboard'])
}

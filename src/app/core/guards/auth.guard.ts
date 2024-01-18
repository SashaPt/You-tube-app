import { Router, CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

export const authGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  let isLogin = false;
  // eslint-disable-next-line no-return-assign
  authService.isLoggedIn$.subscribe((isL) => (isLogin = isL));
  if (isLogin) {
    return true;
  }

  // Redirect to the login page
  return router.navigateByUrl('/auth');
};

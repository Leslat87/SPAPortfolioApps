
// import {
//   ActivatedRouteSnapshot,
//   CanActivateFn,
//   CanMatchFn,
//   Route,
//   RouterStateSnapshot,
//   UrlSegment,
// } from '@angular/router';


// export const canActivateGuard: CanActivateFn = ( //Hay que tener en cuenta el tipado CanActiveFn
//   route: ActivatedRouteSnapshot,
//   state: RouterStateSnapshot
// ) => {
//   console.log('CanActivate');
//   console.log({ route, state });

//   return false;
// };

// export const canMatchGuard: CanMatchFn = ( //Tipado CanMatchFN
//   route: Route,
//   segments: UrlSegment[]
// ) => {
//   console.log('CanMatch');
//   console.log({ route, segments });

//   return false;
// };
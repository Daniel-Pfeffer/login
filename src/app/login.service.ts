import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LoginService implements CanActivate {
    private router: Router;

    constructor(router: Router) {
        this.router = router;
    }

    canActivate(
        /*route: ActivatedRouteSnapshot,state: RouterStateSnapshot*/): boolean {
        if (localStorage.getItem('login') !== undefined && localStorage.getItem('login') !== null) {
            return localStorage.getItem('login').localeCompare('true') === 0;
        }
        this.router.navigate(['login']);
        return false;
    }
}

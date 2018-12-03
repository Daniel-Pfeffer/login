import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    username: string;
    notUsernameSumOtherTextWhichIsRequiredToLogIn: string;
    private user = 'Daniel';
    private nice = 'hi';
    private router: Router;
    private route: ActivatedRoute;
    private loginService: LoginService;
    error: boolean;
    errorMessage: string;

    constructor(router: Router, route: ActivatedRoute, service: LoginService) {
        this.router = router;
        this.route = route;
        this.loginService = service;

        this.route.queryParams.subscribe(params => {
            this.error = params['loginError'];
            this.errorMessage = 'You have to login to enter home';
        });
    }

    ngOnInit() {
    }

    check() {
        if (this.username === this.user && this.nice === this.notUsernameSumOtherTextWhichIsRequiredToLogIn) {
            localStorage.setItem('login', 'true');
            this.router.navigate(['home']);
        } else {
            this.error = true;
            this.errorMessage = 'Sorry wrong Username/password';
        }
    }
}

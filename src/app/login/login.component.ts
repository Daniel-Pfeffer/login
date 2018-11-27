import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

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
    error: boolean;

    constructor(router: Router) {
        this.router = router;
    }

    ngOnInit() {
    }

    check() {
        if (this.username === this.user && this.nice === this.notUsernameSumOtherTextWhichIsRequiredToLogIn) {
            this.router.navigate(['home']);
        } else {
            this.error = true;
        }
    }
}

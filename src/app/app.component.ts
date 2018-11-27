import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'Sum Routerino';
    router: Router;

    about() {
        this.router.navigate(['about']);
    }

    constructor(router: Router) {
        this.router = router;
    }
}

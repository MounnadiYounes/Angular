import { Component } from '@angular/core';

@Component({
    selector: 'app-lector',
    template: `<h1>{{title}}</h1>
    <nav>
        <a routerLink="/groups">Groups</a>
    </nav>
    <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = 'Groups Angular';
}

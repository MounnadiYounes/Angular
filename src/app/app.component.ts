import { Component } from '@angular/core';

@Component({
    selector: 'app-lector',
    template: `<h1>{{title}}</h1>
    <nav>
        <a routerLink="/heroes">Heroes</a>
    </nav>
    <router-outlet></router-outlet>
    `
})

export class AppComponent {
    title = 'Heroes Example';
}

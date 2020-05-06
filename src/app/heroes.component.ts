import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { timer } from 'rxjs';

@Component({
  selector: 'app-my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

export class HeroesComponent implements OnInit {
  heroes: Hero[];

  // dependency injection
  constructor(private heroService: HeroService) {
  }

  // Call subscribe() to start listening for updates
  getHeroes(): void {
    // polling
    timer(0, 2500)
      .subscribe(() => {
        this.heroService.getHeroes()
            .subscribe(data => this.heroes = data);
    });
  }

  ngOnInit(): void {
    this.getHeroes();
  }
}

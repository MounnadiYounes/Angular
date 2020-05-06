import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Hero } from './hero';

import {Observable} from 'rxjs';

// dependency injection
@Injectable()
export class HeroService {

  private heroesUrl = 'http://localhost:8080/Controller';

  // dependency injection
  constructor(private http: HttpClient) {
  }

  // Observables provide support for passing messages between
  // publishers and subscribers in your application
  getHeroes(): Observable<Hero[]> {
      return this.http.get<Hero[]>(this.heroesUrl);
  }
}


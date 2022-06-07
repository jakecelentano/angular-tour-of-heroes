import { Injectable } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HEROES, CLASSES, RACES } from '../data/mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('[HeroService] Fetched heroes')
    return heroes;
  }
  getHero(id: number): Observable<Hero>{
    const hero = HEROES.find(h => h.id === id)!;
    this.messageService.add(`[HeroService] Fetched hero: ${hero.nickname}`);
    return of(hero);

  }

  getClasses(): Observable<String[]>{
    const classes = of(CLASSES);
    return classes;
  }

  getRaces(): Observable<String[]>{
    const races = of(RACES);
    return races;
  }

}

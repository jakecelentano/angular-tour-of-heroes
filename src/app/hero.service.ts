import { Injectable } from '@angular/core';
import { Hero } from './interfaces/hero';
import { HEROES, CLASSES, RACES } from './data/mock-heroes';
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

  getClasses(): String[]{
    return CLASSES
  }

  getRaces(): String[]{
    return RACES
  }
}

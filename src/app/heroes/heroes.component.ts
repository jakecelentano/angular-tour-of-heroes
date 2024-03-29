import { Component, OnInit } from '@angular/core';
import { Hero } from '../interfaces/hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[] = [];
  selectedHero?: Hero;

    constructor(private heroService: HeroService, private messageService: MessageService) {

    }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    if(this.selectedHero == hero){
      this.selectedHero = undefined;
    }
    else{
      this.selectedHero = hero;
      this.messageService.add(`[HeroService] Fetched heroes: ${hero.nickname}`);
    }

  }

  getHeroes(): void{
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
    this.heroes.sort((a,b) => (a.name > b.name) ? 1 : -1);
  }



}

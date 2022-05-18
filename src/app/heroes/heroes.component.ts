import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { CLASSES } from '../mock-heroes'
import { RACES } from '../mock-heroes'

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  classes = CLASSES;
  races = RACES;
  selectedHero?: Hero;
    constructor() { }

  ngOnInit(): void {
    HEROES.sort((a,b) => (a.name > b.name) ? 1 : -1);

  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }



}

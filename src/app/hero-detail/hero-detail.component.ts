import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../interfaces/hero'
import { CLASSES } from '../data/mock-heroes'
import { RACES } from '../data/mock-heroes'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero?: Hero;
  classes = CLASSES;
  races = RACES;
  constructor() { }

  ngOnInit(): void {
  }

}

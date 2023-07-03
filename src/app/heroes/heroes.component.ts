import { Component, OnInit, inject } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit {
  selectedHero?: Hero;
  heroes: Hero[] =[];
  
  constructor(private heroService: HeroService, private messageService:MessageService) { }
  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(){
    this.heroService.getHeroes().then((heroes: Hero[]) =>
    this.heroes = heroes);
  }
  
  onSelect(hero: Hero){
    this.selectedHero = hero;
    this.messageService.add(`Selected Hero id: ${hero.id}`)
  }
}

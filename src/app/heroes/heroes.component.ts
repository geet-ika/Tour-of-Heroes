import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  selectedHero?: Hero;

  onSelect(hero: Hero){
    this.selectedHero = hero;
  }
  heroes: Hero[] = [
    {
      "name": "Geet",
      "id" : 1
  },
  {
      "name": "Rishi",
      "id" : 2
  },
  {
      "name": "Papa",
      "id" : 3
  },
  {
      "name": "Namya",
      "id" : 4
  },
  {
      "name": "Siya",
      "id" : 5
  },
  {
      "name": "Jiya",
      "id" : 6
  },
  {
      "name": "masi",
      "id" : 7
  },
  {
      "name": "Masaji",
      "id" : 8
  },
  {
      "name": "Nani",
      "id" : 9
  }
  ]
}

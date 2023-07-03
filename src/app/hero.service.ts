import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})

export class HeroService {
  url ="http://localhost:3000/heroes";
  
  constructor(private messageService:MessageService) { }
  
  async getHeroes(): Promise<Hero[]> {
    const data = await fetch(`${this.url}`);
    this.messageService.add("Heroes Service: fetched heroes");
    return await data.json()?? [];
  }

  async getHero(id: number): Promise<Hero> {
    const data = await fetch(`${this.url}/${id}`);
    return await data.json()?? {};
  }
}

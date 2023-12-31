import { Component, Input, OnInit, inject } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
  hero: Hero|undefined;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).then(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }
}

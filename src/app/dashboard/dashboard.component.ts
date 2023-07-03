import { Component } from '@angular/core';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  template: `
  <h1>Top Heroes</h1>
  <section>
    <button></button>
    <button></button>
    <button></button>
    <button></button>
  </section>
    <button>
      dashboard works!
    </button>
  `,
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  TopHeroes: Hero[] = [];
  
}

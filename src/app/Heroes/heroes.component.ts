import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from '../Hero/Hero';
import { HeroService } from '../Services/hero-service';

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: [ './heroes.component.css' ]
})

// To have Angular call getHeroes(), you can implement the Angular ngOnInit lifecycle hook. Angular offers interfaces for tapping into critical moments in the component lifecycle: at creation, after each change, and at its eventual destruction.
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];

//   The constructor itself does nothing. The parameter simultaneously defines a private heroService property and identifies it as a HeroService injection site.
// Now Angular knows to supply an instance of the HeroService when it creates an AppComponent.
  constructor(
    private heroService: HeroService,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    // You have to change the implementation to act on the Promise when it resolves. When the Promise resolves successfully, you'll have heroes to display.
    // Pass the callback function as an argument to the Promise's then() method:
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
  
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }
}






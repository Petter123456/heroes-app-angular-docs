import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Hero } from '../Hero/Hero';
// Import the switchMap operator to use later with the route parameters Observable.
import { switchMap } from 'rxjs/operators';
import { HeroService } from '../Services/hero-service';
import { Location }                 from '@angular/common';



// The @Component decorator provides the Angular metadata for the component. The CSS selector name, hero-detail, will match the element tag that identifies this component within a parent component's template. Near the end of this tutorial page, you'll add a <hero-detail> element to the AppComponent template.
@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})

export class HeroDetailComponent implements OnInit {
  // Then declare that hero is an input property by preceding it with the @Input decorator that you imported earlier.
  hero: Hero;

  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}


  ngOnInit(): void {

    // Inside the ngOnInit lifecycle hook, use the params Observable to extract the id parameter value from the ActivatedRoute service and use the HeroService to fetch the hero with that id.s
        // The switchMap operator maps the id in the Observable route parameters to a new Observable, the result of the HeroService.getHero() method.
    // If a user re-navigates to this component while a getHero request is still processing, switchMap cancels the old request and then calls HeroService.getHero() again.
    // The hero id is a number. Route parameters are always strings. So the route parameter value is converted to a number with the JavaScript (+) operator.
    this.route.params
      .pipe(switchMap((params: Params) => this.heroService.getHero(+params['id'])))
      .subscribe(hero => this.hero = hero);
  }

  goBack(): void {
    this.location.back();
  }


}

import { Injectable } from '@angular/core';
import { Hero } from '../Hero/Hero';
import { HEROES } from '../Constants/HEROES';



// The @Injectable() decorator tells TypeScript to emit metadata about the service. The metadata specifies that Angular may need to inject other dependencies into this service.
@Injectable()
export class HeroService {

  constructor() { }

 // A Promise essentially promises to call back when the results are ready. You ask an asynchronous service to do some work and give it a callback function. The service does that work and eventually calls the function with the results or an error.
 getHeroes(): Promise<Hero[]> {
  return Promise.resolve(HEROES);
}

// In the previous code snippet, HeroService doesn't have a getHero() method. 
// To fix this issue, open HeroService and add a getHero() method that filters the heroes list from getHeroes by id.
getHero(id: number): Promise<Hero> {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}
}

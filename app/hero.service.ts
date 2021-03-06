import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';



import { Hero } from './hero';
import { HEROES } from './mock-heroes'; 

@Injectable()
export class HeroService {

    

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
                    .then(heroes => heroes.find(hero => hero.id === id));
    }
    getHeroes(): Promise<Hero[]>{
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise<Hero[]>(resolve =>
        setTimeout(resolve, 2000))
        .then(() => this.getHeroes());
    }


    private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
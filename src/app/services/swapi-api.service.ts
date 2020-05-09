import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonDto } from '../dots/person.dto';
import { StarshipDto } from '../dots/starship.dto';

@Injectable({
  providedIn: 'root'
})
export class SwapiApiService {
  private readonly swapiPath = 'https://swapi.dev/api/';
  private readonly numberOfPeople = 83; // there are 83 people in database;
  private readonly startshipsAvasibleIds = [2, 3, 5, 9, 10, 11, 12, 13, 15, 17, 21, 22, 23, 27, 28, 29, 31, 32, 39, 40, 41, 43]; // there those id are available right now;
  private readonly numberOfStarships = this.startshipsAvasibleIds.length;


  private get personPath() {
    return this.swapiPath + 'people/';
  }
  private get starshipPath() {
    return this.swapiPath + 'starships/';
  }

  constructor(private https: HttpClient ) {}

  getRandomPerson(): Observable<PersonDto> {
    const personId = Math.floor(Math.random() * (this.numberOfPeople - 1) + 1);
    return this.https.get(this.personPath + personId) as Observable<PersonDto>;
  }

  getRandomStarship(): Observable<StarshipDto> {
    const starshipArrayIndex = Math.floor(Math.random() * (this.numberOfStarships - 1));
    const starshipId = this.startshipsAvasibleIds[starshipArrayIndex];
    return this.https.get(this.starshipPath + starshipId) as Observable<StarshipDto>;
  }
}

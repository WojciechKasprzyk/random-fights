import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PersonDto } from '../dots/person.dto';

@Injectable({
  providedIn: 'root'
})
export class SwapiApiService {
  private readonly swapiPath = 'https://swapi.dev/api/';
  private get personPath() {
    return this.swapiPath + 'people/';
  }
  private get starshipPath() {
    return this.swapiPath + 'people/';
  }

  constructor(private https: HttpClient ) {}

  getRandomPerson(): Observable<PersonDto> {
    const personId = Math.floor(Math.random() * 82 + 1); // there is 83 people
    return this.https.get(this.personPath + personId) as Observable<PersonDto>;
  }
}

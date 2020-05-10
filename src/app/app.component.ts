import { Component, OnInit } from '@angular/core';
import { SwapiApiService } from './services/swapi-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'random-fights';

  constructor(private swapiApiService: SwapiApiService) {}

  ngOnInit() {
    this.swapiApiService.getRandomStarship()
      .subscribe(person => console.log(person));
  }
}

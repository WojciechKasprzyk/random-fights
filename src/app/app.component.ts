import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SwapiApiService } from './services/swapi-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'random-fights';
  playedAlready = false;

  constructor(private swapiApiService: SwapiApiService) {}

  play() {
    this.playedAlready = true;
  }

  ngOnInit() {
    this.swapiApiService.getRandomStarship()
      .subscribe(person => console.log(person));
  }
}

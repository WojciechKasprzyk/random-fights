import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { SwapiApiService } from './services/swapi-api.service';
import { SettingsFormComponent } from './components/settings-form/settings-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'random-fights';
  playedAlready = false

  @ViewChild(SettingsFormComponent) settings: SettingsFormComponent;

  constructor(private swapiApiService: SwapiApiService) {}

  play() {
    this.playedAlready = true;
  }

  ngOnInit() {
    this.swapiApiService.getRandomStarship()
      .subscribe(person => console.log(person));
  }
}

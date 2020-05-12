import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { PersonDto } from '../../dots/person.dto';
import { StarshipDto } from '../../dots/starship.dto';
import { SwapiApiService } from '../../services/swapi-api.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-starship-card',
  templateUrl: './starship-card.component.html',
  styleUrls: ['./starship-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StarshipCardComponent implements OnInit, OnDestroy {
  starship: StarshipDto;
  readonly excludedProperties = ['name', 'crew'];
  readonly imageUrl = '../../../assets/default_starship.png';

  private ngUnsubscribe = new Subject();

  constructor(
    private cdr: ChangeDetectorRef,
    private swapiApiService: SwapiApiService) { }

  getStarship() {
    this.swapiApiService.getRandomStarship()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((starship: StarshipDto) => {
        this.starship = starship;
        this.cdr.detectChanges();
      });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

}

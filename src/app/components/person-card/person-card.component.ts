import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { SwapiApiService } from '../../services/swapi-api.service';
import { PersonDto } from '../../dots/person.dto';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PersonCardComponent implements OnInit, OnDestroy {
  person: PersonDto;
  readonly excludedProperties = ['name', 'mass'];
  readonly imageUrl = '../../../assets/default_person.jpg';

  private ngUnsubscribe = new Subject();

  constructor(
    private cdr: ChangeDetectorRef,
    private swapiApiService: SwapiApiService) { }

  getPerson() {
    this.swapiApiService.getRandomPerson()
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((person: PersonDto) => {
        this.person = person;
        this.cdr.detectChanges();
      });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}

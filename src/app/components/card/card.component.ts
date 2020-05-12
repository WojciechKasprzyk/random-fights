import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {
  @Input() excludedProperties: [string, string];
  @Input() imageUrl: string;
  @Input() data;
  @Output() getDate = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}

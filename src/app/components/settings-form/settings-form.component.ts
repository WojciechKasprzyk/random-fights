import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-form',
  templateUrl: './settings-form.component.html',
  styleUrls: ['./settings-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsFormComponent implements OnInit {
  types = ['person', 'starship'];
  chosenType = this.types[0];

  constructor() { }

  ngOnInit() {
  }

}

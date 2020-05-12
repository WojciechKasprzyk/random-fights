import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card/person-card.component';
import { MatButtonModule, MatCardModule, MatRadioModule } from '@angular/material';
import { SettingsFormComponent } from './settings-form/settings-form.component';
import { FormsModule } from '@angular/forms';
import { ScoreTableComponent } from './score-table/score-table.component';
import { PersonPropertiesPipe } from './person-card/person-properties.pipe';


const EXPORT_COMPONENTS = [
  PersonCardComponent,
  SettingsFormComponent,
  ScoreTableComponent,
];


@NgModule({
  declarations: [
    ...EXPORT_COMPONENTS,
    PersonPropertiesPipe
  ],
  exports: [
    ...EXPORT_COMPONENTS,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule
  ],
  providers: [
    PersonPropertiesPipe
  ]
})
export class ComponentsModule { }

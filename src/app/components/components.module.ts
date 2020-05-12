import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card/person-card.component';
import { SettingsFormComponent } from './settings-form/settings-form.component';
import { FormsModule } from '@angular/forms';
import { ScoreTableComponent } from './score-table/score-table.component';
import { PersonPropertiesPipe } from './person-card/person-properties.pipe';
import { CardComponent } from './card/card.component';
import { StarshipCardComponent } from './starship-card/starship-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';


const EXPORT_COMPONENTS = [
  CardComponent,
  StarshipCardComponent,
  PersonCardComponent,
  SettingsFormComponent,
  ScoreTableComponent,
];


@NgModule({
  declarations: [
    ...EXPORT_COMPONENTS,
    PersonPropertiesPipe,
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

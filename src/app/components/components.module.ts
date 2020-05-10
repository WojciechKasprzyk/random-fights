import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card/person-card.component';
import { MatButtonModule, MatCardModule, MatRadioModule } from '@angular/material';
import { SettingsFormComponent } from './settings-form/settings-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PersonCardComponent,
    SettingsFormComponent
  ],
  exports: [
    PersonCardComponent,
    SettingsFormComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    FormsModule
  ]
})
export class ComponentsModule { }

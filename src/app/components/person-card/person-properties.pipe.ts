import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';


@Pipe({name: 'personProperties'})
export class PersonPropertiesPipe implements PipeTransform {
  arrayTypeProperties = ['films', 'species', 'vehicles', 'starships'];
  linkTypeProperties = ['homeworld', 'url'];

  constructor(private sanitizer: DomSanitizer) {
  }

  transform(value: string, key: string): string | SafeHtml {
    if (value === 'unknown' || value === 'none') {
      return '-';
    }
    if (this.arrayTypeProperties.includes(key)) {
      return `${value.length}`;
    }

    if (key === 'created' || key === 'edited') {
      return moment(value).format('yyyy MMM dd');
    }

    if (this.linkTypeProperties.includes(key)) {
      const link = this.sanitizer.bypassSecurityTrustHtml(`<a href="${value}"target="_blank">${value}</a>`);
      return link;
    }

    if (key === 'eye_color' || key === 'hair_color' || key === 'skin_color') {
      const colors = value.split(',');
      const htmlSpan = colors.reduce((val, color) => {
        return val + `<span class="eye-color" style="background: ${color.trim()}"></span>`;
      }, ``);
      return this.sanitizer.bypassSecurityTrustHtml(htmlSpan);
    }

    return value;
  }
}

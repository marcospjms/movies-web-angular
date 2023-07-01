import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customTitle'
})
export class CustomTitlePipe implements PipeTransform {

  transform(value: string, entities: any[]): string {
    return `${value} [${entities ? entities.length : 0}]`;
  }

}

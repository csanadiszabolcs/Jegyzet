import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colorPipe'
})
export class ColorPipePipe implements PipeTransform {
  transform(value: string): string {
    return `<span style="color: red">${value}</span>`;
  }
  }


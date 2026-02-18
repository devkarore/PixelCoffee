import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textLengths',
})
export class TextLengthsPipe implements PipeTransform {
  transform(value: string, wordCount: number = 2): string {
    if (!value) return '';

    const words = value.trim().split(/\s+/);
    const shortText = words.slice(0, wordCount).join(' ');

    return shortText.replace(/,/g, '');
  }
}
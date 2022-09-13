import {Pipe, PipeTransform} from '@angular/core';

// Création de Pipe avec l'option name
@Pipe({
  name: 'shorten'
})
// Implémenter la classe PipeTransform
// doit contenir la méthode tranform() --> cette méthode qui va formater
export class ShortenPipe implements PipeTransform {
  transform(value: string, maxLength = 50): string {
    if (value.length <= maxLength) {
      return value;
    }
    return value.substring(0, maxLength) + '…';
  }
}

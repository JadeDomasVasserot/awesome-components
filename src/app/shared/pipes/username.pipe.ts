import {Pipe, PipeTransform} from '@angular/core';

// Création de Pipe avec l'option name
@Pipe({
  name: 'username'
})
// Implémenter la classe PipeTransform
// doit contenir la méthode tranform() --> cette méthode qui va formater
export class UsernamePipe implements PipeTransform {
  transform(value: { firstName: string, lastName: string }, locale: 'en' | 'fr' = 'fr'): string {
    return locale === 'fr' ?
      ` ${value.lastName.toUpperCase()} ${value.firstName} ` :
      ` ${value.firstName} ${value.lastName} `;
  }
}

import {animate, animation, sequence, style} from "@angular/animations";


// mieux c'est de pouvoir les parametrer
export const FlashAnimation = animation([
  sequence([
    animate('{{time}}', style({
      backgroundColor: '{{ flashColor}}',
    })),
    animate('{{time}}', style({
      backgroundColor: '{{ flashColor}}',
    })),
  ]),

])

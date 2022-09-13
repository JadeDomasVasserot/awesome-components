import {AfterViewInit, Directive, ElementRef, HostListener, Input, Renderer2} from "@angular/core";

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective implements AfterViewInit {
  @Input() color = 'yellow'; // ou peut donner le nom de la directive pour permettre utilisatin + simple
  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngAfterViewInit() {
    this.setBackgroundColor(this.color);
  }

  setBackgroundColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  // on doit s'assurer que la vue a été créer il nous font dont utiliser

  //Réagir aux éléments
  @HostListener('mouseenter') onMouseEnter() {
    this.setBackgroundColor('lightgreen');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBackgroundColor(this.color);
  }

  @HostListener('click') onClick() {
    this.color = 'yellow';
  }
}

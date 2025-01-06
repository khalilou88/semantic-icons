import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-list-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:line x1="8" y1="6" x2="21" y2="6"></svg:line>
    <svg:line x1="8" y1="12" x2="21" y2="12"></svg:line>
    <svg:line x1="8" y1="18" x2="21" y2="18"></svg:line>
    <svg:line x1="3" y1="6" x2="3.01" y2="6"></svg:line>
    <svg:line x1="3" y1="12" x2="3.01" y2="12"></svg:line>
    <svg:line x1="3" y1="18" x2="3.01" y2="18"></svg:line>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiListIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', '24');
    this.render.setAttribute(svg, 'height', '24');
    this.render.setAttribute(svg, 'viewBox', '0 0 24 24');
    this.render.setAttribute(svg, 'fill', 'none');
    this.render.setAttribute(svg, 'stroke', 'currentColor');
    this.render.setAttribute(svg, 'stroke-width', '2');
    this.render.setAttribute(svg, 'stroke-linecap', 'round');
    this.render.setAttribute(svg, 'stroke-linejoin', 'round');
  }
}

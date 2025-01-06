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
  selector: 'svg[si-sun-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="12" cy="12" r="5"></svg:circle>
    <svg:line x1="12" y1="1" x2="12" y2="3"></svg:line>
    <svg:line x1="12" y1="21" x2="12" y2="23"></svg:line>
    <svg:line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></svg:line>
    <svg:line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></svg:line>
    <svg:line x1="1" y1="12" x2="3" y2="12"></svg:line>
    <svg:line x1="21" y1="12" x2="23" y2="12"></svg:line>
    <svg:line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></svg:line>
    <svg:line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></svg:line>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSunIcon implements OnInit {
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

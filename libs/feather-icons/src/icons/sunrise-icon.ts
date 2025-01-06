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
  selector: 'svg[si-sunrise-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M17 18a5 5 0 0 0-10 0"></svg:path>
    <svg:line x1="12" y1="2" x2="12" y2="9"></svg:line>
    <svg:line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></svg:line>
    <svg:line x1="1" y1="18" x2="3" y2="18"></svg:line>
    <svg:line x1="21" y1="18" x2="23" y2="18"></svg:line>
    <svg:line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></svg:line>
    <svg:line x1="23" y1="22" x2="1" y2="22"></svg:line>
    <svg:polyline points="8 6 12 2 16 6"></svg:polyline>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSunriseIcon implements OnInit {
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

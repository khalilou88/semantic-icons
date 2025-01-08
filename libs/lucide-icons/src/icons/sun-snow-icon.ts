import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-sun-snow-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M10 21v-1" />
    <svg:path d="M10 4V3" />
    <svg:path d="M10 9a3 3 0 0 0 0 6" />
    <svg:path d="m14 20 1.25-2.5L18 18" />
    <svg:path d="m14 4 1.25 2.5L18 6" />
    <svg:path d="m17 21-3-6 1.5-3H22" />
    <svg:path d="m17 3-3 6 1.5 3" />
    <svg:path d="M2 12h1" />
    <svg:path d="m20 10-1.5 2 1.5 2" />
    <svg:path d="m3.64 18.36.7-.7" />
    <svg:path d="m4.34 6.34-.7-.7" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSunSnowIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly class = input<string>('');

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

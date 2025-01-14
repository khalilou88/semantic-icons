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
  selector: 'svg[si-chart-grid-dots-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M18 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M6 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M8 18h8" />
    <svg:path d="M18 20v1" />
    <svg:path d="M18 3v1" />
    <svg:path d="M6 20v1" />
    <svg:path d="M6 10v-7" />
    <svg:path d="M12 3v18" />
    <svg:path d="M18 8v8" />
    <svg:path d="M8 12h13" />
    <svg:path d="M21 6h-1" />
    <svg:path d="M16 6h-13" />
    <svg:path d="M3 12h1" />
    <svg:path d="M20 18h1" />
    <svg:path d="M3 18h1" />
    <svg:path d="M6 14v2" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiChartGridDotsIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');

  readonly stroke = input<string>('currentColor');

  readonly strokeWidth = input<string | number>('2', {
    alias: 'stroke-width',
  });

  readonly strokeLinecap = input<string>('round', {
    alias: 'stroke-linecap',
  });

  readonly strokeLinejoin = input<string>('round', {
    alias: 'stroke-linejoin',
  });

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'width', this.width().toString());
    this.render.setAttribute(svg, 'height', this.height().toString());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
    this.render.setAttribute(svg, 'stroke', this.stroke());
    this.render.setAttribute(
      svg,
      'stroke-width',
      this.strokeWidth().toString(),
    );
    this.render.setAttribute(svg, 'stroke-linecap', this.strokeLinecap());
    this.render.setAttribute(svg, 'stroke-linejoin', this.strokeLinejoin());
  }
}

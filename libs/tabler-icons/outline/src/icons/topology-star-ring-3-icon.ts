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
  selector: 'svg[si-topology-star-ring-3-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M10 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M18 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M10 5a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M6 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M18 19a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M14 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M22 12a2 2 0 1 0 -4 0a2 2 0 0 0 4 0z" />
    <svg:path d="M6 12h4" />
    <svg:path d="M14 12h4" />
    <svg:path d="M15 7l-2 3" />
    <svg:path d="M9 7l2 3" />
    <svg:path d="M11 14l-2 3" />
    <svg:path d="M13 14l2 3" />
    <svg:path d="M10 5h4" />
    <svg:path d="M10 19h4" />
    <svg:path d="M17 17l2 -3" />
    <svg:path d="M19 10l-2 -3" />
    <svg:path d="M7 7l-2 3" />
    <svg:path d="M5 14l2 3" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTopologyStarRing3Icon implements OnInit {
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

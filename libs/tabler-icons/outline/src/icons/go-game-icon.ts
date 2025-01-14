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
  selector: 'svg[si-go-game-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M6 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M6 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M18 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <svg:path d="M3 12h7m4 0h7" />
    <svg:path d="M3 6h1m4 0h13" />
    <svg:path d="M3 18h1m4 0h8m4 0h1" />
    <svg:path d="M6 3v1m0 4v8m0 4v1" />
    <svg:path d="M12 3v7m0 4v7" />
    <svg:path d="M18 3v13m0 4v1" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGoGameIcon implements OnInit {
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
    this.render.setAttribute(svg, 'width', this.width());
    this.render.setAttribute(svg, 'height', this.height());
    this.render.setAttribute(svg, 'viewBox', this.viewBox());
    this.render.setAttribute(svg, 'fill', this.fill());
    this.render.setAttribute(svg, 'stroke', this.stroke());
    this.render.setAttribute(svg, 'stroke-width', this.strokeWidth());
    this.render.setAttribute(svg, 'stroke-linecap', this.strokeLinecap());
    this.render.setAttribute(svg, 'stroke-linejoin', this.strokeLinejoin());
  }
}

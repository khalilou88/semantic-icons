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
  selector: 'svg[si-brand-livewire-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M20.982 18.777c-.372 .548 -.652 1.223 -1.406 1.223c-1.269 0 -1.337 -1.913 -2.607 -1.913c-1.27 0 -1.2 1.913 -2.47 1.913c-1.268 0 -1.337 -1.913 -2.607 -1.913c-1.269 0 -1.2 1.913 -2.47 1.913c-1.268 0 -1.337 -1.913 -2.607 -1.913c-1.27 0 -1.2 1.913 -2.47 1.913c-.398 0 -.679 -.189 -.915 -.448a10.414 10.414 0 0 1 -1.43 -5.29c0 -5.669 4.477 -10.262 10 -10.262c5.524 0 10 4.594 10 10.261c0 1.62 -.366 3.152 -1.018 4.516z"
    />
    <svg:path
      d="M20.982 18.777c-.372 .548 -.652 1.223 -1.406 1.223c-1.269 0 -1.337 -1.913 -2.607 -1.913c-1.27 0 -1.2 1.913 -2.47 1.913c-1.268 0 -1.337 -1.913 -2.607 -1.913c-1.269 0 -1.2 1.913 -2.47 1.913c-1.268 0 -1.337 -1.913 -2.607 -1.913c-1.27 0 -1.2 1.913 -2.47 1.913c-.398 0 -.679 -.189 -.915 -.448a10.414 10.414 0 0 1 -1.43 -5.29c0 -5.669 4.477 -10.262 10 -10.262c5.524 0 10 4.594 10 10.261c0 1.62 -.366 3.152 -1.018 4.516z"
    />
    <svg:path
      d="M11.5 16c3.167 0 4.5 -1.748 4.5 -4.231c0 -2.484 -2.014 -4.769 -4.5 -4.769c-2.485 0 -4.5 2.286 -4.5 4.769s1.333 4.231 4.5 4.231z"
    />
    <svg:path d="M10 11a1 1 0 1 0 0 -2a1 1 0 0 0 0 2z" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBrandLivewireIcon implements OnInit {
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

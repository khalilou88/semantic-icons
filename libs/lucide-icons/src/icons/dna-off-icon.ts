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
  selector: 'svg[si-dna-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M15 2c-1.35 1.5-2.092 3-2.5 4.5L14 8" />
    <svg:path d="m17 6-2.891-2.891" />
    <svg:path d="M2 15c3.333-3 6.667-3 10-3" />
    <svg:path d="m2 2 20 20" />
    <svg:path d="m20 9 .891.891" />
    <svg:path d="M22 9c-1.5 1.35-3 2.092-4.5 2.5l-1-1" />
    <svg:path d="M3.109 14.109 4 15" />
    <svg:path d="m6.5 12.5 1 1" />
    <svg:path d="m7 18 2.891 2.891" />
    <svg:path d="M9 22c1.35-1.5 2.092-3 2.5-4.5L10 16" />
  `,
  host: {
    '[class]': 'class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDnaOffIcon implements OnInit {
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

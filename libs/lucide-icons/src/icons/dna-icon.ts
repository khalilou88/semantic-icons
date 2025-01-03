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
  selector: 'svg[si-dna-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m10 16 1.5 1.5" />
    <svg:path d="m14 8-1.5-1.5" />
    <svg:path d="M15 2c-1.798 1.998-2.518 3.995-2.807 5.993" />
    <svg:path d="m16.5 10.5 1 1" />
    <svg:path d="m17 6-2.891-2.891" />
    <svg:path d="M2 15c6.667-6 13.333 0 20-6" />
    <svg:path d="m20 9 .891.891" />
    <svg:path d="M3.109 14.109 4 15" />
    <svg:path d="m6.5 12.5 1 1" />
    <svg:path d="m7 18 2.891 2.891" />
    <svg:path d="M9 22c1.798-1.998 2.518-3.995 2.807-5.993" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiDnaIcon implements OnInit {
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

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
  selector: 'svg[si-radar-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M19.07 4.93A10 10 0 0 0 6.99 3.34" />
    <svg:path d="M4 6h.01" />
    <svg:path d="M2.29 9.62A10 10 0 1 0 21.31 8.35" />
    <svg:path d="M16.24 7.76A6 6 0 1 0 8.23 16.67" />
    <svg:path d="M12 18h.01" />
    <svg:path d="M17.99 11.66A6 6 0 0 1 15.77 16.67" />
    <svg:circle cx="12" cy="12" r="2" />
    <svg:path d="m13.41 10.59 5.66-5.66" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRadarIcon implements OnInit {
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

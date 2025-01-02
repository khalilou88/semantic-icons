import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-marquee-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M4 6c0 -.556 .227 -1.059 .593 -1.421" />
    <svg:path d="M9 4h1.5" />
    <svg:path d="M13.5 4h1.5" />
    <svg:path d="M18 4a2 2 0 0 1 2 2" />
    <svg:path d="M20 9v1.5" />
    <svg:path d="M20 13.5v1.5" />
    <svg:path d="M19.402 19.426a1.993 1.993 0 0 1 -1.402 .574" />
    <svg:path d="M15 20h-1.5" />
    <svg:path d="M10.5 20h-1.5" />
    <svg:path d="M6 20a2 2 0 0 1 -2 -2" />
    <svg:path d="M4 15v-1.5" />
    <svg:path d="M4 10.5v-1.5" />
    <svg:path d="M3 3l18 18" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMarqueeOffIcon implements OnInit {
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

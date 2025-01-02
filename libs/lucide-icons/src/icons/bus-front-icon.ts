import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  NO_ERRORS_SCHEMA,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-bus-front-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M4 6 2 7" />
    <svg:path d="M10 6h4" />
    <svg:path d="m22 7-2-1" />
    <rect width="16" height="16" x="4" y="3" rx="2" />
    <svg:path d="M4 11h16" />
    <svg:path d="M8 15h.01" />
    <svg:path d="M16 15h.01" />
    <svg:path d="M6 19v2" />
    <svg:path d="M18 21v-2" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiBusFrontIcon implements OnInit {
  private readonly elementRef = Inject(ElementRef);
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

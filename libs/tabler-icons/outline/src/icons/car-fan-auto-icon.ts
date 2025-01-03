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
  selector: 'svg[si-car-fan-auto-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M12 12v-9l4.912 1.914a1.7 1.7 0 0 1 .428 2.925z" />
    <svg:path d="M14.044 14.624l-2.044 -2.624h4" />
    <svg:path d="M12 12h-9l1.914 -4.912a1.7 1.7 0 0 1 2.925 -.428z" />
    <svg:path d="M12 12v9l-4.912 -1.914a1.7 1.7 0 0 1 -.428 -2.925z" />
    <svg:path d="M17 21v-4a2 2 0 1 1 4 0v4" />
    <svg:path d="M17 19h4" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCarFanAutoIcon implements OnInit {
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
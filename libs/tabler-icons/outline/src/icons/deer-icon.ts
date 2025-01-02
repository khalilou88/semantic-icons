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
  selector: 'svg[si-deer-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M3 3c0 2 1 3 4 3c2 0 3 1 3 3" />
    <svg:path d="M21 3c0 2 -1 3 -4 3c-2 0 -3 .333 -3 3" />
    <svg:path
      d="M12 18c-1 0 -4 -3 -4 -6c0 -2 1.333 -3 4 -3s4 1 4 3c0 3 -3 6 -4 6"
    />
    <svg:path d="M15.185 14.889l.095 -.18a4 4 0 1 1 -6.56 0" />
    <svg:path d="M17 3c0 1.333 -.333 2.333 -1 3" />
    <svg:path d="M7 3c0 1.333 .333 2.333 1 3" />
    <svg:path d="M7 6c-2.667 .667 -4.333 1.667 -5 3" />
    <svg:path d="M17 6c2.667 .667 4.333 1.667 5 3" />
    <svg:path d="M8.5 10l-1.5 -1" />
    <svg:path d="M15.5 10l1.5 -1" />
    <svg:path d="M12 15h.01" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDeerIcon implements OnInit {
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

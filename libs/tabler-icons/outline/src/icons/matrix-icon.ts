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
  selector: 'svg[si-matrix-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path d="M8 16h.013" />
    <svg:path d="M12.01 16h.005" />
    <svg:path d="M16.015 16h.005" />
    <svg:path d="M16.015 12h.005" />
    <svg:path d="M8.01 12h.005" />
    <svg:path d="M12.01 12h.005" />
    <svg:path d="M16.02 8h.005" />
    <svg:path d="M8.015 8h.005" />
    <svg:path d="M12.015 8h.005" />
    <svg:path d="M7 4h-1a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h1" />
    <svg:path d="M17 4h1a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-1" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiMatrixIcon implements OnInit {
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

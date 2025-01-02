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
  selector: 'svg[si-theater-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="M2 10s3-3 3-8" />
    <svg:path d="M22 10s-3-3-3-8" />
    <svg:path d="M10 2c0 4.4-3.6 8-8 8" />
    <svg:path d="M14 2c0 4.4 3.6 8 8 8" />
    <svg:path d="M2 10s2 2 2 5" />
    <svg:path d="M22 10s-2 2-2 5" />
    <svg:path d="M8 15h8" />
    <svg:path d="M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
    <svg:path d="M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiTheaterIcon implements OnInit {
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

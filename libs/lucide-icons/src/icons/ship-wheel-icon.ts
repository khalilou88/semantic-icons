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
  selector: 'svg[si-ship-wheel-icon]',
  standalone: true,
  imports: [],
  template: `
    <circle cx="12" cy="12" r="8" />
    <svg:path d="M12 2v7.5" />
    <svg:path d="m19 5-5.23 5.23" />
    <svg:path d="M22 12h-7.5" />
    <svg:path d="m19 19-5.23-5.23" />
    <svg:path d="M12 14.5V22" />
    <svg:path d="M10.23 13.77 5 19" />
    <svg:path d="M9.5 12H2" />
    <svg:path d="M10.23 10.23 5 5" />
    <circle cx="12" cy="12" r="2.5" />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiShipWheelIcon implements OnInit {
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

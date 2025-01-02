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
  selector: 'svg[si-thermometer-snowflake-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path d="m10 20-1.25-2.5L6 18" />
    <svg:path d="M10 4 8.75 6.5 6 6" />
    <svg:path d="M10.585 15H10" />
    <svg:path d="M2 12h6.5L10 9" />
    <svg:path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" />
    <svg:path d="m4 10 1.5 2L4 14" />
    <svg:path d="m7 21 3-6-1.5-3" />
    <svg:path d="m7 3 3 6h2" />
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiThermometerSnowflakeIcon implements OnInit {
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

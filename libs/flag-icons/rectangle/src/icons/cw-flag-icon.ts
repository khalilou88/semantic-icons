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
  selector: 'svg[si-cw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="cw-a">
        <svg:path fill-opacity=".7" d="M0 0h682.7v512H0z" />
      </clipPath>
      <svg:path id="cw-b" d="m0-1 .2.7H1L.3 0l.2.7L0 .4l-.6.4.2-.7-.5-.4h.7z" />
    </defs>
    <g clip-path="url(#cw-a)" transform="scale(.94)">
      <svg:path fill="#002b7f" d="M0 0h768v512H0z" />
      <svg:path fill="#f9e814" d="M0 320h768v64H0z" />
      <use
        xlink:href="#cw-b"
        width="13500"
        height="9000"
        x="2"
        y="2"
        fill="#fff"
        transform="scale(42.67)"
      />
      <use
        xlink:href="#cw-b"
        width="13500"
        height="9000"
        x="3"
        y="3"
        fill="#fff"
        transform="scale(56.9)"
      />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiCwFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

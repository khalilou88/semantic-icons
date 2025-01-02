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
  selector: 'svg[si-rw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#20603d" d="M0 0h640v480H0z" />
    <svg:path fill="#fad201" d="M0 0h640v360H0z" />
    <svg:path fill="#00a1de" d="M0 0h640v240H0z" />
    <g transform="translate(511 125.4)scale(.66667)">
      <g id="rw-b">
        <svg:path
          id="rw-a"
          fill="#e5be01"
          d="M116.1 0 35.7 4.7l76.4 25.4-78.8-16.3L100.6 58l-72-36.2L82 82.1 21.9 28.6l36.2 72-44.3-67.3L30 112 4.7 35.7 0 116.1-1-1z"
        />
        <use
          xlink:href="#rw-a"
          width="100%"
          height="100%"
          transform="scale(1 -1)"
        />
      </g>
      <use
        xlink:href="#rw-b"
        width="100%"
        height="100%"
        transform="scale(-1 1)"
      />
      <svg:circle r="34.3" fill="#e5be01" stroke="#00a1de" stroke-width="3.4" />
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiRwFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

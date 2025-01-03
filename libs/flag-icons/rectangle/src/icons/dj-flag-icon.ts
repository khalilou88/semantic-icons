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
  selector: 'svg[si-dj-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="dj-a">
        <svg:path fill-opacity=".7" d="M-40 0h682.7v512H-40z" />
      </clipPath>
    </defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#dj-a)"
      transform="translate(37.5)scale(.94)"
    >
      <svg:path fill="#0c0" d="M-40 0h768v512H-40z" />
      <svg:path fill="#69f" d="M-40 0h768v256H-40z" />
      <svg:path fill="#fffefe" d="m-40 0 382.7 255.7L-40 511z" />
      <svg:path
        fill="red"
        d="M119.8 292 89 270l-30.7 22.4L69.7 256l-30.6-22.5 37.9-.3 11.7-36.3 12 36.2h37.9l-30.5 22.7 11.7 36.4z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiDjFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

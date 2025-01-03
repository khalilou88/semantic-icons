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
  selector: 'svg[si-gd-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <svg:g id="gd-c">
        <svg:g id="gd-b">
          <svg:path
            id="gd-a"
            fill="#fcd116"
            d="M0-1v1h.5"
            transform="rotate(18 0 -1)"
          />
          <use xlink:href="#gd-a" transform="scale(-1 1)" />
        </svg:g>
        <use xlink:href="#gd-b" transform="rotate(72)" />
        <use xlink:href="#gd-b" transform="rotate(144)" />
        <use xlink:href="#gd-b" transform="rotate(216)" />
        <use xlink:href="#gd-b" transform="rotate(288)" />
      </svg:g>
    </defs>
    <svg:path fill="#ce1126" d="M0 0h640v480H0z" />
    <svg:path fill="#007a5e" d="M67.2 67.2h505.6v345.6H67.2z" />
    <svg:path fill="#fcd116" d="M67.2 67.3h505.6L67.2 412.9h505.6z" />
    <svg:circle cx="319.9" cy="240.1" r="57.6" fill="#ce1126" />
    <use
      xlink:href="#gd-c"
      width="100%"
      height="100%"
      transform="translate(320 240)scale(52.8)"
    />
    <use
      xlink:href="#gd-d"
      width="100%"
      height="100%"
      x="-100"
      transform="translate(-30.3)"
    />
    <use
      id="gd-d"
      xlink:href="#gd-c"
      width="100%"
      height="100%"
      transform="translate(320 33.6)scale(31.2)"
    />
    <use
      xlink:href="#gd-d"
      width="100%"
      height="100%"
      x="100"
      transform="translate(30.3)"
    />
    <svg:path
      fill="#ce1126"
      d="M102.3 240.7a80.4 80.4 0 0 0 33.5 33.2 111 111 0 0 0-11.3-45z"
    />
    <svg:path
      fill="#fcd116"
      d="M90.1 194.7c10.4 21.7-27.1 73.7 35.5 85.9a63.2 63.2 0 0 1-10.9-41.9 70 70 0 0 1 32.5 30.8c16.4-59.5-42-55.8-57.1-74.8"
    />
    <use
      xlink:href="#gd-d"
      width="100%"
      height="100%"
      x="-100"
      transform="translate(-30.3 414.6)"
    />
    <use
      xlink:href="#gd-c"
      width="100%"
      height="100%"
      transform="translate(320 448.2)scale(31.2)"
    />
    <use
      xlink:href="#gd-d"
      width="100%"
      height="100%"
      x="100"
      transform="translate(30.3 414.6)"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiGdFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

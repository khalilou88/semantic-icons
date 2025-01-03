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
  selector: 'svg[si-kr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#fff" fill-rule="evenodd" d="M0 0h512v512H0Z" />
    <svg:g
      fill-rule="evenodd"
      transform="rotate(-56.3 367.2 -111.2)scale(9.375)"
    >
      <svg:g id="kr-b">
        <svg:path
          id="kr-a"
          fill="#000001"
          d="M-6-26H6v2H-6Zm0 3H6v2H-6Zm0 3H6v2H-6Z"
        />
        <use xlink:href="#kr-a" width="100%" height="100%" y="44" />
      </svg:g>
      <svg:path stroke="#fff" d="M0 17v10" />
      <svg:path fill="#cd2e3a" d="M0-12a12 12 0 0 1 0 24Z" />
      <svg:path fill="#0047a0" d="M0-12a12 12 0 0 0 0 24A6 6 0 0 0 0 0Z" />
      <svg:circle cy="-6" r="6" fill="#cd2e3a" />
    </svg:g>
    <svg:g
      fill-rule="evenodd"
      transform="rotate(-123.7 196.5 59.5)scale(9.375)"
    >
      <use xlink:href="#kr-b" width="100%" height="100%" />
      <svg:path stroke="#fff" d="M0-23.5v3M0 17v3.5m0 3v3" />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiKrFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

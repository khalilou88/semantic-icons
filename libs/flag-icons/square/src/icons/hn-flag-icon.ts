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
  selector: 'svg[si-hn-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#18c3df" d="M0 0h512v512H0z" />
    <svg:path fill="#fff" d="M0 170.7h512v170.6H0z" />
    <g id="hn-c" fill="#18c3df" transform="translate(256 256)scale(28.44446)">
      <g id="hn-b">
        <svg:path id="hn-a" d="m0-1-.3 1 .5.1z" />
        <use
          xlink:href="#hn-a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </g>
      <use
        xlink:href="#hn-b"
        width="100%"
        height="100%"
        transform="rotate(72)"
      />
      <use
        xlink:href="#hn-b"
        width="100%"
        height="100%"
        transform="rotate(-72)"
      />
      <use
        xlink:href="#hn-b"
        width="100%"
        height="100%"
        transform="rotate(144)"
      />
      <use
        xlink:href="#hn-b"
        width="100%"
        height="100%"
        transform="rotate(-144)"
      />
    </g>
    <use
      xlink:href="#hn-c"
      width="100%"
      height="100%"
      transform="translate(142.2 -45.5)"
    />
    <use
      xlink:href="#hn-c"
      width="100%"
      height="100%"
      transform="translate(142.2 39.8)"
    />
    <use
      xlink:href="#hn-c"
      width="100%"
      height="100%"
      transform="translate(-142.2 -45.5)"
    />
    <use
      xlink:href="#hn-c"
      width="100%"
      height="100%"
      transform="translate(-142.2 39.8)"
    />
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiHnFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

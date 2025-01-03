import {
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewEncapsulation,
  inject,
} from '@angular/core';

@Component({
  selector: 'svg[si-ke-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:path
        id="ke-a"
        stroke-miterlimit="10"
        d="m-28.6 47.5 1.8 1 46.7-81c2.7-.6 4.2-3.2 5.7-5.8 1-1.8 5-8.7 6.7-17.7a58 58 0 0 0-11.9 14.7c-1.5 2.6-3 5.2-2.3 7.9z"
      />
    </svg:defs>
    <svg:path fill="#fff" d="M0 0h512v512H0z" />
    <svg:path fill="#000001" d="M0 0h512v153.6H0z" />
    <svg:path fill="#060" d="M0 358.4h512V512H0z" />
    <svg:g id="ke-b" transform="matrix(3.2 0 0 3.2 255.8 256)">
      <svg:use xlink:href="#ke-a" width="100%" height="100%" stroke="#000" />
      <svg:use xlink:href="#ke-a" width="100%" height="100%" fill="#fff" />
    </svg:g>
    <svg:use
      xlink:href="#ke-b"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 511.7 0)"
    />
    <svg:path
      fill="#b00"
      d="M255.8 102.4c-19.2 0-51.2 51.2-60.8 76.8H0v153.6h195c9.7 25.6 41.7 76.8 60.9 76.8 19.2 0 51.2-51.2 60.8-76.8H512V179.2H316.6c-9.6-25.6-41.6-76.8-60.8-76.8"
    />
    <svg:path
      id="ke-c"
      d="M316.6 332.8a220 220 0 0 0 16-76.8 220 220 0 0 0-16-76.8 220 220 0 0 0-16 76.8 220 220 0 0 0 16 76.8"
    />
    <svg:use
      xlink:href="#ke-c"
      width="100%"
      height="100%"
      transform="matrix(-1 0 0 1 511.7 0)"
    />
    <svg:g fill="#fff" transform="matrix(3.2 0 0 3.2 255.8 256)">
      <svg:ellipse rx="4" ry="6" />
      <svg:path id="ke-d" d="M1 5.8s4 8 4 21-4 21-4 21z" />
      <svg:use
        xlink:href="#ke-d"
        width="100%"
        height="100%"
        transform="scale(-1)"
      />
      <svg:use
        xlink:href="#ke-d"
        width="100%"
        height="100%"
        transform="scale(-1 1)"
      />
      <svg:use
        xlink:href="#ke-d"
        width="100%"
        height="100%"
        transform="scale(1 -1)"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiKeFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

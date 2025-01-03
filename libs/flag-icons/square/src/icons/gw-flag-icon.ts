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
  selector: 'svg[si-gw-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path fill="#ce1126" d="M0 0h160v512H0z" />
    <svg:path fill="#fcd116" d="M160 0h352v256H160z" />
    <svg:path fill="#009e49" d="M160 256h352v256H160z" />
    <svg:g transform="translate(-46.2 72.8)scale(.7886)">
      <svg:g id="gw-b" transform="matrix(80 0 0 80 160 240)">
        <svg:path
          id="gw-a"
          fill="#000001"
          d="M0-1v1h.5"
          transform="rotate(18 0 -1)"
        />
        <svg:use
          xlink:href="#gw-a"
          width="100%"
          height="100%"
          transform="scale(-1 1)"
        />
      </svg:g>
      <svg:use
        xlink:href="#gw-b"
        width="100%"
        height="100%"
        transform="rotate(72 160 240)"
      />
      <svg:use
        xlink:href="#gw-b"
        width="100%"
        height="100%"
        transform="rotate(144 160 240)"
      />
      <svg:use
        xlink:href="#gw-b"
        width="100%"
        height="100%"
        transform="rotate(-144 160 240)"
      />
      <svg:use
        xlink:href="#gw-b"
        width="100%"
        height="100%"
        transform="rotate(-72 160 240)"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiGwFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

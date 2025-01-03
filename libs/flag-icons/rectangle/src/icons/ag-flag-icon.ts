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
  selector: 'svg[si-ag-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="ag-a">
        <svg:path fill-opacity=".7" d="M-79.7 0H603v512H-79.7z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#ag-a)"
      transform="translate(74.7)scale(.9375)"
    >
      <svg:path fill="#fff" d="M-79.7 0H603v512H-79.7z" />
      <svg:path fill="#000001" d="M-79.6 0H603v204.8H-79.7z" />
      <svg:path fill="#0072c6" d="M21.3 203.2h480v112h-480z" />
      <svg:path
        fill="#ce1126"
        d="M603 .1V512H261.6L603 0zM-79.7.1V512h341.3L-79.7 0z"
      />
      <svg:path
        fill="#fcd116"
        d="M440.4 203.3 364 184l64.9-49-79.7 11.4 41-69.5-70.7 41L332.3 37l-47.9 63.8-19.3-74-21.7 76.3-47.8-65 13.7 83.2L138.5 78l41 69.5-77.4-12.5 63.8 47.8L86 203.3z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiAgFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

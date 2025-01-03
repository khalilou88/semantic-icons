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
        <svg:path fill="#25ff01" d="M109 47.6h464.8v464.9H109z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#ag-a)"
      transform="translate(-120 -52.4)scale(1.1014)"
    >
      <svg:path fill="#fff" d="M0 47.6h693V512H0z" />
      <svg:path fill="#000001" d="M109 47.6h464.8v186.1H109z" />
      <svg:path fill="#0072c6" d="M128.3 232.1h435.8v103.5H128.3z" />
      <svg:path
        fill="#ce1126"
        d="M692.5 49.2v463.3H347zm-691.3 0v463.3h345.7z"
      />
      <svg:path
        fill="#fcd116"
        d="m508.8 232.2-69.3-17.6 59-44.4-72.5 10.3 37.3-63-64.1 37.2 11.3-73.5-43.4 58-17.6-67.3-19.6 69.3-43.4-59 12.4 75.6-64.1-39.3 37.2 63-70.3-11.3 57.9 43.4-72.4 18.6z"
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
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

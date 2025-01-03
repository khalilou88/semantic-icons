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
  selector: 'svg[si-vn-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="vn-a">
        <svg:path fill-opacity=".7" d="M177.2 0h708.6v708.7H177.2z" />
      </clipPath>
    </defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#vn-a)"
      transform="translate(-128)scale(.72249)"
    >
      <svg:path fill="#da251d" d="M0 0h1063v708.7H0z" />
      <svg:path
        fill="#ff0"
        d="m661 527.5-124-92.6-123.3 93.5 45.9-152-123.2-93.8 152.4-1.3L536 129.8 584.3 281l152.4.2-122.5 94.7z"
      />
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiVnFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

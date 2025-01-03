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
  selector: 'svg[si-ps-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="ps-a">
        <svg:path fill-opacity=".7" d="M-118 0h682.7v512H-118z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#ps-a)" transform="translate(110.6)scale(.9375)">
      <svg:g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#000001" d="M-246 0H778v170.7H-246z" />
        <svg:path fill="#fff" d="M-246 170.7H778v170.6H-246z" />
        <svg:path fill="#090" d="M-246 341.3H778V512H-246z" />
        <svg:path fill="red" d="m-246 512 512-256L-246 0z" />
      </svg:g>
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiPsFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

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
  selector: 'svg[si-jo-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <defs>
      <clipPath id="jo-a">
        <svg:path fill-opacity=".7" d="M-117.8 0h682.6v512h-682.6z" />
      </clipPath>
    </defs>
    <g clip-path="url(#jo-a)" transform="translate(110.5)scale(.9375)">
      <g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#000001" d="M-117.8 0h1024v170.7h-1024z" />
        <svg:path fill="#fff" d="M-117.8 170.7h1024v170.6h-1024z" />
        <svg:path fill="#090" d="M-117.8 341.3h1024V512h-1024z" />
        <svg:path fill="red" d="m-117.8 512 512-256-512-256z" />
        <svg:path
          fill="#fff"
          d="m24.5 289 5.7-24.9H4.7l23-11-15.9-19.9 23 11 5.6-24.8 5.7 24.9L69 233.2l-16 19.9 23 11H50.6l5.7 24.9-15.9-20z"
        />
      </g>
    </g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiJoFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 640 480');
  }
}

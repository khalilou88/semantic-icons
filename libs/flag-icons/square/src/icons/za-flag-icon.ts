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
  selector: 'svg[si-za-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="za-a">
        <svg:path fill-opacity=".7" d="M70.1 0h499.6v499.6H70.1z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#za-a)" transform="translate(-71.9)scale(1.0248)">
      <svg:g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#000001" d="M0 397.9v-296l220.4 147.9z" />
        <svg:path fill="#000c8a" d="m150.4 499.7 247.4-166.5h351.6v166.5z" />
        <svg:path
          fill="#e1392d"
          d="M134.5 0h615v166.6H397.7S137.8-1.6 134.5 0"
        />
        <svg:path
          fill="#ffb915"
          d="M0 62.5v39.3l220.4 148L0 397.8v39.4l277.6-187.4z"
        />
        <svg:path
          fill="#007847"
          d="M0 62.5V0h92.6l294 199h362.8v101.7H386.6l-294 198.9H0v-62.4l277.6-187.4z"
        />
        <svg:path
          fill="#fff"
          d="M92.6 0h57.8l247.4 166.6h351.6V199H386.6zm0 499.7h57.8l247.4-166.5h351.6v-32.4H386.6z"
        />
      </svg:g>
    </svg:g>
  `,
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [NO_ERRORS_SCHEMA],
})
export class SiZaFlagIcon implements OnInit {
  private readonly elementRef = inject(ElementRef);
  private readonly render = inject(Renderer2);

  ngOnInit(): void {
    const svg = this.elementRef.nativeElement;
    this.render.setAttribute(svg, 'xmlns', 'http://www.w3.org/2000/svg');
    this.render.setAttribute(svg, 'viewBox', '0 0 512 512');
  }
}

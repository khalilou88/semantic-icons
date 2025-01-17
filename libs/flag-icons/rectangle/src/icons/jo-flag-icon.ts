import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-jo-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="jo-a">
        <svg:path fill-opacity=".7" d="M-117.8 0h682.6v512h-682.6z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#jo-a)" transform="translate(110.5)scale(.9375)">
      <svg:g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#000001" d="M-117.8 0h1024v170.7h-1024z" />
        <svg:path fill="#fff" d="M-117.8 170.7h1024v170.6h-1024z" />
        <svg:path fill="#090" d="M-117.8 341.3h1024V512h-1024z" />
        <svg:path fill="red" d="m-117.8 512 512-256-512-256z" />
        <svg:path
          fill="#fff"
          d="m24.5 289 5.7-24.9H4.7l23-11-15.9-19.9 23 11 5.6-24.8 5.7 24.9L69 233.2l-16 19.9 23 11H50.6l5.7 24.9-15.9-20z"
        />
      </svg:g>
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiJoFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}

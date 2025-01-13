import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cg-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="cg-a">
        <svg:path fill-opacity=".7" d="M115.7 0h496.1v496h-496z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#cg-a)"
      transform="translate(-119.5)scale(1.032)"
    >
      <svg:path fill="#ff0" d="M0 0h744v496H0z" />
      <svg:path fill="#00ca00" d="M0 0v496L496 0z" />
      <svg:path fill="red" d="M248 496h496V0z" />
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
export class SiCgFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

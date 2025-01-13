import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-is-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="is-a">
        <svg:path fill-opacity=".7" d="M85.4 0h486v486h-486z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="0"
      clip-path="url(#is-a)"
      transform="translate(-90)scale(1.0535)"
    >
      <svg:path fill="#003897" d="M0 0h675v486H0z" />
      <svg:path
        fill="#fff"
        d="M0 189h189V0h108v189h378v108H297v189H189V297H0z"
      />
      <svg:path
        fill="#d72828"
        d="M0 216h216V0h54v216h405v54H270v216h-54V270H0z"
      />
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
export class SiIsFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

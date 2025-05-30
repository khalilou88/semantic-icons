import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-nr-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="nr-a">
        <svg:path fill-opacity=".7" d="M135.6 0h496.1v496h-496z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      stroke-width="1pt"
      clip-path="url(#nr-a)"
      transform="translate(-140)scale(1.0321)"
    >
      <svg:path fill="#002170" d="M0 0h992.1v496H0z" />
      <svg:path fill="#ffb20d" d="M0 226.8h992.1v42.4H0z" />
      <svg:path
        fill="#fff"
        d="m292.4 424.4-31.9-32-10.2 44-11.7-43.7-30.9 33 11.8-43.6-43.2 13 32-31.8-44-10.3 43.6-11.6-33-31 43.6 11.8-13-43.2 31.8 32 10.3-44 11.7 43.6 30.8-32.9-11.7 43.6 43.2-13-32 31.8 44 10.3L290 362l33 30.9-43.7-11.7z"
      />
    </svg:g>
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiNrFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

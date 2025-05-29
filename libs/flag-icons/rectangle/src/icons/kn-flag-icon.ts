import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-kn-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="kn-a">
        <svg:path fill-opacity=".7" d="M-80.1 0h682.7v512H-80.1z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g
      fill-rule="evenodd"
      clip-path="url(#kn-a)"
      transform="translate(75.1)scale(.9375)"
    >
      <svg:path fill="#ffe900" d="M-107.8.2h737.6v511.3h-737.6z" />
      <svg:path fill="#35a100" d="m-108.2.2.8 368.6L466.6 0z" />
      <svg:path fill="#c70000" d="m630.7 511.5-1.4-383.2-579 383.5z" />
      <svg:path
        fill="#000001"
        d="m-107.9 396.6.5 115.4 125.3-.2 611.7-410.1L629 1.4 505.2.2z"
      />
      <svg:path
        fill="#fff"
        d="m380.4 156.6-9.8-42.2 33.3 27 38-24.6-17.4 41.3 33.4 27-44.2-1.5-17.3 41.3-9.9-42.2-44.1-1.5zm-275.2 179-9.9-42.3 33.3 27 38-24.6-17.4 41.3 33.4 27-44.1-1.5-17.4 41.3-9.8-42.2-44.1-1.5z"
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
export class SiKnFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}

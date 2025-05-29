import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tz-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:defs>
      <svg:clipPath id="tz-a">
        <svg:path fill-opacity=".7" d="M102.9 0h496v496H103z" />
      </svg:clipPath>
    </svg:defs>
    <svg:g clip-path="url(#tz-a)" transform="translate(-106.2)scale(1.0321)">
      <svg:g fill-rule="evenodd" stroke-width="1pt">
        <svg:path fill="#09f" d="M0 0h744.1v496H0z" />
        <svg:path fill="#090" d="M0 0h744.1L0 496z" />
        <svg:path
          fill="#000001"
          d="M0 496h165.4L744 103.4V0H578.7L0 392.7v103.4z"
        />
        <svg:path
          fill="#ff0"
          d="M0 378 567 0h56L0 415.3v-37.2zm121.1 118 623-415.3V118L177 496z"
        />
      </svg:g>
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
export class SiTzFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

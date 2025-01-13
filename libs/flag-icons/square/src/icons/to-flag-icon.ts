import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-to-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g fill-rule="evenodd" stroke-width="1pt">
      <svg:path fill="#c10000" d="M0 0h512v512H0z" />
      <svg:path fill="#fff" d="M0 0h218.3v175H0z" />
      <svg:g fill="#c10000">
        <svg:path d="M89.8 27.3h34.8v121.9H89.8z" />
        <svg:path d="M168.2 70.8v34.8H46.3V70.8z" />
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
export class SiToFlagIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 512 512');
}

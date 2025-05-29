import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-lc-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:g fill-rule="evenodd">
      <svg:path fill="#65cfff" d="M0 0h640v480H0z" />
      <svg:path fill="#fff" d="m318.9 42 162.7 395.3-322.6.9z" />
      <svg:path fill="#000001" d="m319 96.5 140.8 340-279 .8z" />
      <svg:path fill="#ffce00" d="m318.9 240.1 162.7 197.6-322.6.5z" />
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
export class SiLcFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 640 480');
}

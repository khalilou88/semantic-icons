import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-xx-flag-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="#fff"
      fill-rule="evenodd"
      stroke="#adb5bd"
      d="M.5.5h511v511H.5z"
    />
    <svg:path fill="none" stroke="#adb5bd" d="m.5.5 511 511m0-511-511 511" />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiXxFlagIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 512 512');
}

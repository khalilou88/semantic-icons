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
      stroke-width="1.1"
      d="M.5.5h638.9v478.9H.5z"
    />
    <svg:path
      fill="none"
      stroke="#adb5bd"
      stroke-width="1.1"
      d="m.5.5 639 479m0-479-639 479"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiXxFlagIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 640 480');
}

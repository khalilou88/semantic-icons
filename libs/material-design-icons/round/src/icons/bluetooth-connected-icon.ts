import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-bluetooth-connected-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 13c.55-.55.55-1.44 0-1.99V11c-.55-.55-1.45-.55-2 0s-.55 1.45 0 2 1.45.55 2 0zm14-2a1.41 1.41 0 0 0-2-.01V11c-.55.55-.55 1.44 0 1.99V13c.55.55 1.44.55 1.99 0H20c.55-.55.55-1.45 0-2zm-3-4-4.29-4.29c-.63-.63-1.71-.19-1.71.7v6.18L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12 5.7 16.89a.996.996 0 1 0 1.41 1.41L11 14.41v6.18c0 .89 1.08 1.34 1.71.71L17 17c.39-.39.39-1.02 0-1.42L13.41 12 17 8.42c.39-.39.39-1.03 0-1.42zm-2.12 9.29L13 18.17v-3.76l1.88 1.88zM13 9.59V5.83l1.88 1.88L13 9.59z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiBluetoothConnectedIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-update-disabled-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.94 13a8.865 8.865 0 0 1-1.33 3.79l-1.47-1.47c.38-.71.65-1.49.77-2.32h2.03zM8.67 5.84A7.06 7.06 0 0 1 12 5a7.01 7.01 0 0 1 5.74 3H15v2h6V4h-2v2.36C17.35 4.32 14.83 3 12 3c-1.76 0-3.4.51-4.78 1.39l1.45 1.45zM11 7v1.17l2 2V7h-2zm8.78 15.61-3-3A8.973 8.973 0 0 1 12 21a9 9 0 0 1-9-9c0-1.76.51-3.4 1.39-4.78l-3-3L2.8 2.81l18.38 18.38-1.4 1.42zm-4.46-4.46L5.84 8.67A7.06 7.06 0 0 0 5 12c0 3.86 3.14 7 7 7 1.2 0 2.34-.31 3.32-.85z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiUpdateDisabledIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

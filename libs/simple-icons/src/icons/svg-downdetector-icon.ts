import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-downdetector-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Downdetector</title>
      <path
        d="M12 0C5.49 0 .257 5.362.257 12v12H12c6.51 0 11.743-5.362 11.743-12S18.51 0 12 0Zm0 3.51c.543 0 1.086.065 1.66.192.383.128.639.383.639.766l-.638 10.085c0 .255-.256.511-.512.511-.766.128-1.533.128-2.171 0-.383 0-.639-.256-.639-.51L9.701 4.467c0-.383.256-.638.638-.766A7.583 7.583 0 0 1 12 3.51Zm.065 12.99c.447 0 .892.031 1.339.095.255 0 .384.256.384.384.127.894.127 1.786 0 2.807 0 .256-.257.384-.384.384a9.427 9.427 0 0 1-2.68 0c-.256 0-.384-.256-.384-.384-.128-.893-.128-1.786 0-2.807 0-.255.256-.384.383-.384a9.478 9.478 0 0 1 1.342-.095z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgDowndetectorIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
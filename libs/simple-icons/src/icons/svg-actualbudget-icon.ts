import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-actualbudget-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Actual Budget</title>
      <path
        d="m17.442 10.779.737 2.01-16.758 6.145a.253.253 0 0 1-.324-.15l-.563-1.536a.253.253 0 0 1 .15-.324zM1.13 23.309 12.036.145A.253.253 0 0 1 12.265 0h.478c.097 0 .185.055.227.142l7.036 14.455 2.206-.848c.13-.05.277.015.327.145l.587 1.526a.253.253 0 0 1-.145.327l-2.034.783 2.51 5.156a.253.253 0 0 1-.117.338l-1.47.716a.253.253 0 0 1-.339-.117l-2.59-5.322-17.37 6.682a.253.253 0 0 1-.328-.145c0-.001 0-.003-.002-.004l-.12-.33a.252.252 0 0 1 .009-.195zM12.528 4.127 4.854 20.425 18 15.369z"
      />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgActualbudgetIcon {
  readonly class = input<string>('');
}

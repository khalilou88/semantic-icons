import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-pino-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>pino</title>
      <path
        d="m9.225 5.555 2.789 5.472 2.756-5.505L11.999 0M1.979 20.123h13.769v-.037L8.862 6.29m3.524 5.522 4.131 8.311h5.505L15.137 6.291M4.5 24h14.87l-1.554-3.188H6.056"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPinoIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

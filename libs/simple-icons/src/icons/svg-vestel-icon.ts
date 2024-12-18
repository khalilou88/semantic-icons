import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-vestel-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Vestel</title>
      <path
        d="M 12.051 9.4 L 10.663 9.4 C 10.663 9.4 9.016 9.459 8.889 10.993 C 8.762 12.527 10.471 12.496 10.79 13.151 C 10.993 13.57 10.495 13.89 10.072 13.89 L 8.928 13.89 L 8.928 14.6 L 10.868 14.6 C 10.868 14.6 12.899 14.49 12.613 12.743 C 12.43 11.616 11.188 11.791 10.771 11.033 C 10.355 10.276 11.081 10.061 11.159 10.061 L 12.041 10.061 L 12.051 9.4 Z M 12.256 9.437 L 16.359 9.437 L 16.359 10.096 L 15.151 10.096 L 15.151 14.564 L 13.517 14.564 L 13.517 10.096 L 12.256 10.096 L 12.256 9.437 Z M 16.653 9.437 L 20.046 9.437 L 20.046 10.042 L 18.288 10.042 L 18.288 11.751 L 19.887 11.751 L 19.887 12.356 L 18.288 12.356 L 18.288 13.852 L 20.154 13.852 L 20.154 14.564 L 16.653 14.564 L 16.653 9.437 Z M 20.428 9.437 L 22.135 9.437 L 22.135 13.852 L 24 13.852 L 24 14.564 L 20.428 14.564 L 20.428 9.437 Z M 5.042 9.437 L 8.49 9.437 L 8.49 10.042 L 6.677 10.042 L 6.677 11.751 L 8.277 11.751 L 8.277 12.356 L 6.677 12.356 L 6.677 13.852 L 8.596 13.852 L 8.596 14.564 L 5.042 14.564 L 5.042 9.437 Z M 3.991 9.436 L 2.891 13.014 L 1.756 9.436 L 0 9.436 L 1.801 14.562 L 3.114 14.562 L 4.87 9.436 L 3.991 9.436 Z"
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
export class SvgVestelIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-remedyentertainment-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Remedy Entertainment</title>
      <path
        d="M13.717 5.245v6.613a3.309 3.309 0 0 0 3.306-3.307 3.31 3.31 0 0 0-3.306-3.306Zm-4.594 0h-3.45v6.613h3.455a3.309 3.309 0 0 0 3.306-3.307 3.312 3.312 0 0 0-3.311-3.306Zm11.448 9.915v-1.507a8.578 8.578 0 0 1-2.714 2.379l2.714 4.792v-2.878L24 24h-7.574l-2.709-4.789V24h-1.656l-3.907-6.897H5.673V24H0V0h9.123a8.5 8.5 0 0 1 4.589 1.337V0a8.551 8.551 0 0 1 6.859 3.441V1.939a8.527 8.527 0 0 1 3.133 6.612 8.516 8.516 0 0 1-3.133 6.609Z"
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
export class SvgRemedyentertainmentIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-expertsexchange-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="classInput()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Experts Exchange</title>
      <path
        d="M7.28.9H0L8.36 12 0 23.1h7.28L15.64 12zM24 .9h-7.28l-2.3 3.06 3.64 4.82zM14.42 20.05l2.3 3.05H24l-5.94-7.88z"
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
export class SvgExpertsexchangeIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}

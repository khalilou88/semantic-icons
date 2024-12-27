import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bh-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-bh"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fff" d="M0 0h512v512H0" />
      <path
        fill="#ce1126"
        d="M512 0H102.4l83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2 83.4 51.2-83.4 51.2H512"
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
export class SvgBhFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

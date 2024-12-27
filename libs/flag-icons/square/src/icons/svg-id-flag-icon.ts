import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-id-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-id"
      [class]="svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#e70011" d="M0 0h512v256H0Z" />
      <path fill="#fff" d="M0 256h512v256H0Z" />
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
export class SvgIdFlagIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

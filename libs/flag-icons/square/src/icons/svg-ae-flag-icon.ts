import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-ae-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-ae"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#00732f" d="M0 0h512v170.7H0z" />
      <path fill="#fff" d="M0 170.7h512v170.6H0z" />
      <path fill="#000001" d="M0 341.3h512V512H0z" />
      <path fill="red" d="M0 0h180v512H0z" />
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
export class SvgAeFlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}

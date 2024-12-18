import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-es-ct-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-es-ct"
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path fill="#fcdd09" d="M0 0h512v512H0z" />
      <path
        stroke="#da121a"
        stroke-width="60"
        d="M0 90h810m0 120H0m0 120h810m0 120H0"
        transform="scale(.6321 .94815)"
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
export class SvgEsCtFlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}

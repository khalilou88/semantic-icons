import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sy-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-sy"
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#000001" d="M0 0h640v480H0Z" />
      <path fill="#fff" d="M0 0h640v320H0Z" />
      <path fill="#ce1126" d="M0 0h640v160H0Z" />
      <path
        fill="#007a3d"
        d="m161 300 39-120 39 120-102-74.2h126M401 300l39-120 39 120-102-74.2h126"
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
export class SvgSyFlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}

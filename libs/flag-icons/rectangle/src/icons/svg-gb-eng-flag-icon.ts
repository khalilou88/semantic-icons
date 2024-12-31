import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gb-eng-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-gb-eng"
      [class]="classInput()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 640 480"
    >
      <path fill="#fff" d="M0 0h640v480H0z" />
      <path fill="#ce1124" d="M281.6 0h76.8v480h-76.8z" />
      <path fill="#ce1124" d="M0 201.6h640v76.8H0z" />
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
export class SvgGbEngFlagIcon {
  readonly classInput = input<string>('', {
    alias: 'class',
  });
}

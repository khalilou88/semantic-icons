import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-snowflake-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-snowflake"
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M10 4l2 1l2 -1" />
      <path d="M12 2v6.5l3 1.72" />
      <path d="M17.928 6.268l.134 2.232l1.866 1.232" />
      <path d="M20.66 7l-5.629 3.25l.01 3.458" />
      <path d="M19.928 14.268l-1.866 1.232l-.134 2.232" />
      <path d="M20.66 17l-5.629 -3.25l-2.99 1.738" />
      <path d="M14 20l-2 -1l-2 1" />
      <path d="M12 22v-6.5l-3 -1.72" />
      <path d="M6.072 17.732l-.134 -2.232l-1.866 -1.232" />
      <path d="M3.34 17l5.629 -3.25l-.01 -3.458" />
      <path d="M4.072 9.732l1.866 -1.232l.134 -2.232" />
      <path d="M3.34 7l5.629 3.25l2.99 -1.738" />
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSnowflakeIcon {
  readonly class = input<string>('');
}

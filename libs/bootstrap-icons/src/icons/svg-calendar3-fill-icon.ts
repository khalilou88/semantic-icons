import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-calendar3-fill-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="bi bi-calendar3-fill"
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      viewBox="0 0 16 16"
    >
      <path
        d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm0 1v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3z"
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
export class SvgCalendar3FillIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}

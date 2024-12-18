import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-fire-hydrant-off-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-fire-hydrant-off"
      [class]="_class()"
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
      <path d="M5 21h14" />
      <path
        d="M17 21v-4m2 -2v-2a1 1 0 0 0 -1 -1h-1v-4a5 5 0 0 0 -8.533 -3.538m-1.387 2.638a5.03 5.03 0 0 0 -.08 .9v4h-1a1 1 0 0 0 -1 1v2a1 1 0 0 0 1 1h1v5"
      />
      <path d="M12 12a2 2 0 1 0 2 2" />
      <path d="M6 8h2m4 0h6" />
      <path d="M3 3l18 18" />
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
export class SvgFireHydrantOffIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}

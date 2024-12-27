import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gender-genderfluid-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-gender-genderfluid"
      [class]="svgClass()"
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
      <path d="M10 15.464a4 4 0 1 0 4 -6.928a4 4 0 0 0 -4 6.928z" />
      <path d="M15.464 14l3 -5.196" />
      <path d="M5.536 15.195l3 -5.196" />
      <path d="M12 12h.01" />
      <path d="M9 9l-6 -6" />
      <path d="M5.5 8.5l3 -3" />
      <path d="M21 21l-6 -6" />
      <path d="M17 20l3 -3" />
      <path d="M3 7v-4h4" />
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
export class SvgGenderGenderfluidIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

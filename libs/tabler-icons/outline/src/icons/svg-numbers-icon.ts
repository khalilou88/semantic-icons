import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-numbers-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-numbers"
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
      <path d="M8 10v-7l-2 2" />
      <path d="M6 16a2 2 0 1 1 4 0c0 .591 -.601 1.46 -1 2l-3 3h4" />
      <path d="M15 14a2 2 0 1 0 2 -2a2 2 0 1 0 -2 -2" />
      <path d="M6.5 10h3" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgNumbersIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}

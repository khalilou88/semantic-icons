import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-time-duration-10-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-time-duration-10"
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
      <path d="M9 9v6" />
      <path d="M12 11v2a2 2 0 1 0 4 0v-2a2 2 0 1 0 -4 0z" />
      <path d="M3 12v.01" />
      <path d="M21 12v.01" />
      <path d="M12 21v.01" />
      <path d="M7.5 4.2v.01" />
      <path d="M16.5 19.8v.01" />
      <path d="M7.5 19.8v.01" />
      <path d="M4.2 16.5v.01" />
      <path d="M19.8 16.5v.01" />
      <path d="M4.2 7.5v.01" />
      <path d="M19.81 7.527a8.994 8.994 0 0 0 -7.81 -4.527" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgTimeDuration10Icon {
  readonly class = input('');

  readonly hostClass = input('contents');
}

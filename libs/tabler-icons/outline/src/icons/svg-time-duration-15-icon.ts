import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-time-duration-15-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-time-duration-15"
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
      <path d="M12 15h2a1 1 0 0 0 1 -1v-1a1 1 0 0 0 -1 -1h-2v-3h3" />
      <path d="M9 9v6" />
      <path d="M3 12v.01" />
      <path d="M12 21v.01" />
      <path d="M7.5 4.2v.01" />
      <path d="M16.5 19.8v.01" />
      <path d="M7.5 19.8v.01" />
      <path d="M4.2 16.5v.01" />
      <path d="M19.8 16.5v.01" />
      <path d="M4.2 7.5v.01" />
      <path d="M21 12a9 9 0 0 0 -9 -9" />
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
export class SvgTimeDuration15Icon {
  readonly class = input<string>('');
}

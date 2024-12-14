import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-microscope-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-microscope"
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
      <path d="M5 21h14" />
      <path d="M6 18h2" />
      <path d="M7 18v3" />
      <path d="M9 11l3 3l6 -6l-3 -3z" />
      <path d="M10.5 12.5l-1.5 1.5" />
      <path d="M17 3l3 3" />
      <path d="M12 21a6 6 0 0 0 3.715 -10.712" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgMicroscopeIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}

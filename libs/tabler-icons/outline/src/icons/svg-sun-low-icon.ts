import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sun-low-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      class="icon icon-tabler icons-tabler-outline icon-tabler-sun-low"
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
      <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" />
      <path d="M4 12h.01" />
      <path d="M12 4v.01" />
      <path d="M20 12h.01" />
      <path d="M12 20v.01" />
      <path d="M6.31 6.31l-.01 -.01" />
      <path d="M17.71 6.31l-.01 -.01" />
      <path d="M17.7 17.7l.01 .01" />
      <path d="M6.3 17.7l.01 .01" />
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgSunLowIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-in-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#eee" d="m0 160 256-32 256 32v192l-256 32L0 352z" />
        <path fill="#ff9811" d="M0 0h512v160H0Z" />
        <path fill="#6da544" d="M0 352h512v160H0Z" />
        <circle cx="256" cy="256" r="72" fill="#0052b4" />
        <circle cx="256" cy="256" r="48" fill="#eee" />
        <circle cx="256" cy="256" r="24" fill="#0052b4" />
      </g>
    </svg>
  `,
  host: {
    '[class]': 'hostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgInFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}

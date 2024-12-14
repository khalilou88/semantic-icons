import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bl-flag-icon',
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
        <path fill="#eee" d="M0 0h512v512H0z" />
        <path
          fill="#acabb1"
          d="M167 178a28 28 0 0 0-28 28H55a28 28 0 0 0 28 28 28 28 0 0 0 28 28 28 28 0 0 0 28 28h234a28 28 0 0 0 28-28 28 28 0 0 0 28-28 28 28 0 0 0 28-28h-84a28 28 0 0 0-28-28z"
        />
        <path
          fill="#ffda44"
          d="M123 357h44v44h-44zm222 0h44v44h-44zm-178 11h178v44H167zm67-268v33.5L223 145l-12-6v-17h-44v56l89 14 89-14v-56h-44v17l-12 6-11-11.5V100z"
        />
        <path
          fill="#0052b4"
          d="M167 178v112c0 68 89 88.5 89 88.5s89-20.4 89-88.5V178z"
        />
        <path fill="#d80027" d="M167 222.1h178v69H167z" />
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
export class SvgBlFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}

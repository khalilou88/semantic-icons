import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-sami-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#ffda44" d="M199 0h32l32 256-32 256h-32l-32-256Z" />
        <path fill="#496e2d" d="M167 0h32v512h-32l-32-256Z" />
        <path fill="#0052b4" d="M231 0h281v512H231Z" />
        <path
          fill="#d80027"
          d="M0 0h167v512H0Zm199 132-32 16 32 16a92 92 0 1 1 0 184l-32 16 32 16a124 124 0 0 0 0-248z"
        />
        <path
          fill="#0052b4"
          d="M199 132a124 124 0 0 0 0 248v-32a92 92 0 1 1 0-184z"
        />
      </g>
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
export class SvgSamiFlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}

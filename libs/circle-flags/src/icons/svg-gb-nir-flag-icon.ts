import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gb-nir-flag-icon',
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
        <path
          fill="#eee"
          d="M0 0h224l32 32 32-32h224v224l-32 32 32 32v224H288l-32-32-32 32H0V288l32-32-32-32Z"
        />
        <path
          fill="#d80027"
          d="M224 0v224H0v64h224v224h64V288h224v-64H288V0Z"
        />
        <path
          fill="#acabb1"
          d="m256 104-44 76h-87l43 76-43 76h87l44 76 44-76h87l-43-76 43-76h-87z"
        />
        <path
          fill="#eee"
          d="m256 131-36 62h-73l37 63-37 63h73l36 63 36-63h73l-37-63 37-63h-73l-36-62z"
        />
        <path
          fill="#d80027"
          d="M259 195c-5 0-5 5-5 5v39h-3v-33s0-6-5-6c-6 0-6 6-6 6v35l-3 1v-25s0-6-5-6c-6 0-6 6-6 6v43c0 10 5 20 12 26v21h36v-17c9-5 16-14 18-25 0-6 2-11 4-16l4-14s1-5-4-7-7 3-7 3l-8 19h-3v-47s0-5-5-5c-6 0-6 5-6 5v36h-2v-39s0-5-6-5z"
        />
        <path
          fill="#ffda44"
          d="M245 38v11h-11v22h11v21c-6-6-14-9-22-9a33 33 0 0 0-23 57v20h112v-20c6-7 10-15 10-24a33 33 0 0 0-55-24V71h11V49h-11V38Z"
        />
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
export class SvgGbNirFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-ai-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-ai"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 480"
    >
      <defs>
        <path
          id="ai-b"
          fill="#f90"
          d="M271 87c1.5 3.6 6.5 7.6 7.8 9.6-1.7 2-2 1.8-1.8 5.4 3-3.1 3-3.5 5-3 4.2 4.2.8 13.3-2.8 15.3-3.4 2.1-2.8 0-8 2.6 2.3 2 5.1-.3 7.4.3 1.2 1.5-.6 4.1.4 6.7 2-.2 1.8-4.3 2.2-5.8 1.5-5.4 10.4-9.1 10.8-14.1 1.9-.9 3.7-.3 6 1-1.1-4.6-4.9-4.6-5.9-6-2.4-3.7-4.5-7.8-9.6-9-3.8-.7-3.5.3-6-1.4-1.6-1.2-6.3-3.4-5.5-1.6"
        />
      </defs>
      <clipPath id="ai-a">
        <path d="M0 0v120h373.3v120H320zm320 0H160v280H0v-40z" />
      </clipPath>
      <path fill="#012169" d="M0 0h640v480H0z" />
      <path stroke="#fff" stroke-width="50" d="m0 0 320 240m0-240L0 240" />
      <path
        stroke="#c8102e"
        stroke-width="30"
        d="m0 0 320 240m0-240L0 240"
        clip-path="url(#ai-a)"
      />
      <path stroke="#fff" stroke-width="75" d="M160 0v280M0 120h373.3" />
      <path stroke="#c8102e" stroke-width="50" d="M160 0v280M0 120h373.3" />
      <path fill="#012169" d="M0 240h320V0h106.7v320H0z" />
      <path
        fill="#fff"
        d="M424 191.8c0 90.4 9.7 121.5 29.3 142.5a179.4 179.4 0 0 0 35 30 179.7 179.7 0 0 0 35-30c19.5-21 29.3-52.1 29.3-142.5-14.2 6.5-22.3 9.7-34 9.5a78.4 78.4 0 0 1-30.3-9.5 78.4 78.4 0 0 1-30.3 9.5c-11.7.2-19.8-3-34-9.5"
      />
      <g transform="matrix(1.96 0 0 2.002 -40.8 62.9)">
        <use xlink:href="#ai-b" />
        <circle cx="281.3" cy="91.1" r=".8" fill="#fff" fill-rule="evenodd" />
      </g>
      <g transform="matrix(-.916 -1.77 1.733 -.935 563.4 829)">
        <use xlink:href="#ai-b" />
        <circle cx="281.3" cy="91.1" r=".8" fill="#fff" fill-rule="evenodd" />
      </g>
      <g transform="matrix(-1.01 1.716 -1.68 -1.031 925.4 -103.2)">
        <use xlink:href="#ai-b" />
        <circle cx="281.3" cy="91.1" r=".8" fill="#fff" fill-rule="evenodd" />
      </g>
      <path
        fill="#9cf"
        d="M440 315.1a78 78 0 0 0 13.3 19.2 179.4 179.4 0 0 0 35 30 180 180 0 0 0 35-30 78 78 0 0 0 13.2-19.2z"
      />
      <path
        fill="#fdc301"
        d="M421.2 188.2c0 94.2 10.2 126.6 30.6 148.5a187 187 0 0 0 36.5 31.1 186.3 186.3 0 0 0 36.4-31.1c20.4-21.9 30.6-54.3 30.6-148.5-14.8 6.8-23.3 10.1-35.5 10-11-.3-22.6-5.7-31.5-10-9 4.3-20.6 9.7-31.5 10-12.3.1-20.7-3.2-35.6-10m4 5c14 6.5 22 9.6 33.5 9.4a76.4 76.4 0 0 0 29.6-9.4c8.4 4 19.3 9.2 29.6 9.4 11.5.2 19.4-3 33.4-9.4 0 89-9.6 119.6-28.8 140.2a176 176 0 0 1-34.2 29.4 175.6 175.6 0 0 1-34.3-29.4c-19.2-20.6-28.7-51.3-28.7-140.2z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgAiFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}

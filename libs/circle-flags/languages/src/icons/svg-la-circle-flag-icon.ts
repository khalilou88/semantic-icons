import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-la-circle-flag-icon',
  standalone: true,
  imports: [NgClass],
  template: `
    <svg
      [ngClass]="class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      viewBox="0 0 512 512"
    >
      <mask id="a"><circle cx="256" cy="256" r="256" fill="#fff" /></mask>
      <g mask="url(#a)">
        <path fill="#d80027" d="M0 0h512v512H0Z" />
        <path
          fill="#ffda44"
          d="M192 112a16 16 0 0 0-8 2c-17 9-33 20-45 34-8-22-24-26-24-26s-14 13-7 35c2 9 6 15 10 19-8 14-14 29-18 45-17-15-33-10-33-10s-6 17 11 34c6 6 13 9 18 11 0 17 3 33 7 48-22-5-33 7-33 7s4 18 26 24c9 3 16 2 21 1 9 14 19 27 31 38-22 6-26 23-26 23s13 14 35 7c9-2 15-6 19-10a159 159 0 0 0 160 0c4 4 10 8 19 10 22 7 35-7 35-7s-4-17-26-23c12-11 22-24 31-38 5 1 12 2 21-1 22-6 26-24 26-24s-11-12-33-7c4-15 7-31 7-48 5-2 12-5 18-11 17-17 11-34 11-34s-16-5-33 10c-4-16-10-31-18-45 4-4 8-10 10-19 7-22-7-35-7-35s-16 4-24 26c-12-14-28-25-45-34a16 16 0 0 0-8-2 16 16 0 0 0-13 9 16 16 0 0 0 7 21c13 7 24 16 34 26-23 1-31 16-31 16s8 16 32 16c8 0 15-2 19-5 6 10 10 20 12 31-20-11-35-2-35-2s-1 18 19 30c8 4 14 6 20 6 0 11-2 23-5 33l-1-1c-11-20-30-19-30-19s-9 15 3 36c4 7 9 12 14 14-6 9-12 18-20 25-1-23-17-31-17-31s-16 8-16 32c0 8 3 15 5 19a126 126 0 0 1-122 0c3-4 5-11 5-19 0-24-16-32-16-32s-16 8-17 31c-7-7-14-16-20-25 5-2 10-7 14-14 12-21 3-36 3-36s-19-1-30 19v1c-4-10-6-22-6-33 6 0 12-2 20-6 20-12 19-30 19-30s-15-9-35 2c2-11 6-21 12-31 4 3 11 5 19 5 24 0 32-16 32-16s-8-15-31-16c10-10 21-19 34-26a16 16 0 0 0 7-21 16 16 0 0 0-13-9z"
        />
      </g>
    </svg>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgLaCircleFlagIcon {
  readonly class = input('');
}

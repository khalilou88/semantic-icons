import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-bt-flag-icon',
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
        <path fill="#ffda44" d="M0 0h512L281 293.2 0 512z" />
        <path fill="#ff9811" d="M506.7 0 0 506.7v5.3h512V0h-5.3z" />
        <path
          fill="#eee"
          d="M398.2 142V97.7h-85.3l-6.5 6.5c-23.2 23.2-19.3 50.2-16.5 70 2.7 18.3 3 25.3-3.8 32-6.8 7-14 6.6-32.2 4-19.7-3-46.8-6.8-70 16.4-23.2 23.2-19.3 50.3-16.4 70 2.6 18.3 3 25.4-4 32.2-6.7 6.8-13.7 6.5-32 3.8-7.2-1-14.5-2-22.4-2.2l-.5 44.6c5 0 10.6.8 16.5 1.7 7 1 15 2.2 23.5 2.2 8.7 0 18-1.3 27-5.2v35.6h66.8v-33.4H209v-22.2h22.3v-33.4h-18c.9-10.8-.6-21.2-2-30-2.5-18.4-3-25.4 4-32.2 6.8-6.8 13.8-6.5 32.2-3.8 14.3 2 32.6 4.7 50.4-3v35.6h66.8v-33.4h-33.3V231h22.3v-33.4h-17.8a130 130 0 0 0-2-30c-1.8-12.8-2.5-20-.4-25.6z"
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
export class SvgBtFlagIcon {
  readonly class = input('');

  readonly hostClass = input('contents');
}

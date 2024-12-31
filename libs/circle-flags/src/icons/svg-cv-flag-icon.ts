import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-cv-flag-icon',
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
          fill="#0052b4"
          d="M0 0h512v256.2l-41.9 64.3 41.9 63.7V512H0V384.2L41.3 320 0 256.2z"
        />
        <path
          fill="#eee"
          d="M0 256.2h512v42.9l-15.7 21.6 15.7 21v42.5H0v-42.5l15.1-21.5L0 299z"
        />
        <path fill="#d80027" d="M0 299.1h512v42.6H0z" />
        <path
          fill="#ffda44"
          d="m182.8 190.4 5.2 16.4h17.1l-13.8 10 5.3 16.3-13.8-10-14 10 5.4-16.3-13.9-10h17.1zm0 213.3L188 420h17.1l-13.8 10 5.3 16.2-13.8-10-14 10L174 430l-14-10h17.2zm-99.2-72.1 5.2 16.2h17.1L92.1 358l5.2 16.2-13.7-10-14 10L75 358l-14-10.1h17.2zm37.9-119.8 5 16h17.2l-13.8 10.3 5.2 16.2-13.7-10-14 10 5.4-16.3-14-10.1H116zm-60.4 67h17l5.5-16.2 5.2 16.2h17.1L92.1 289l5.2 16.4L83.6 295l-14 10.3 5.4-16.4zm46.5 143 5.3-16.2L99 395.4h17.1l5.4-16.2 5.2 16.3h17.1L130 405.6l5.3 16.2-13.8-10zM282 331.6l-5.4 16.2h-17l13.8 10.2-5.3 16.2 13.9-10 13.8 10-5.2-16.3 13.7-10.1h-17zm-38-119.8-5.3 16.2h-17.1l14 10.2-5.4 16.2 13.9-10 13.8 10-5.3-16.3 13.8-10.1h-17zm60.3 67h-17l-5.3-16.2-5.4 16.2h-17l13.8 10.1-5.3 16.4L282 295l13.8 10.3-5.2-16.4zm-46.4 143-5.3-16.2 13.8-10.2h-17l-5.3-16.2-5.4 16.3h-17.1l14 10.1-5.4 16.2 13.9-10z"
        />
      </g>
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: block;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgCvFlagIcon {
  readonly class = input<string>('');
}

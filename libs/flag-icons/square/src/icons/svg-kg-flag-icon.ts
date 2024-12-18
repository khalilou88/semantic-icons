import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-kg-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      id="flag-icons-kg"
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <defs>
        <clipPath id="kg-a">
          <path fill-opacity=".7" d="M104 0h416.3v416.3H104.1z" />
        </clipPath>
      </defs>
      <g
        fill-rule="evenodd"
        clip-path="url(#kg-a)"
        transform="translate(-128)scale(1.23)"
      >
        <path fill="red" d="M0 0h625v416.3H0z" />
        <path
          fill="#ff0"
          d="M189.8 212.3c11.1-13.5 34.1-.3 52.9-10-22.3 1.2-34.4-10.7-52-9 18.2-11.2 33.7 3.6 54.1-2.4-27-2.2-25.8-14.3-50.3-16 21.8-9.3 32.5 9.6 53.9 5.3-25.2-5.8-28.5-20.6-47.2-23.8 27.3-4.1 25.5 12 52.3 14-27.2-11.6-20-21.8-42.8-30.6 25.5-.6 23.8 17 49.5 21.6-22-14-19.3-26.8-37.5-36.8 21.6.4 23.7 22.5 45.7 29.3-19.6-15.5-14.5-28.7-31.4-42.6 21.4 5 18.3 24.1 40.6 36.2-16.5-18.3-10.2-31.5-24.6-46.6 20.6 6.7 12.8 24.8 34.2 42-12.3-20.2-4.7-33.1-16.8-50.2 19.2 10 9.9 28.4 27.7 46.8-8.4-20.7 0-33.6-8.6-52 16.4 12.3 6.7 32 19.9 50.9-4.8-26 6.4-30.3 2.9-53 12.4 15.3-1.5 30.6 8 53-1-25.5 12.5-31.5 10.1-52 12.4 18.4-6.9 34.4 1.2 54.1 2-24.3 18-30.5 18.3-49.4 9.7 17.3-11.5 29.8-8 52.8 6.9-25.4 23.9-28.5 26-45.6 5.8 20-17.4 29.4-16 51.6 6.9-22.5 28.1-25.2 32.5-41.8 2.6 21.2-18.3 25-24.1 48.4 11-19 30.2-20.7 38.8-35.8-.7 21-24.3 23.7-31.5 43.4 13.6-16.7 30.6-13.8 44.2-28.6-1.4 19-25.4 17.9-38.2 37.5 14.8-13.6 37-9.5 48.3-21.2-.6 16.7-30 15.5-44 30.4 17.2-9.3 38.9-3.8 51.5-12.6C427 184.3 396 181 381 192.4c20.5-5.7 36.3 3 53-3.3-8.1 14.3-36.3 5.3-51.3 14.6 17.8-3 36.7 7.7 52.9 4.3-5.3 12.3-36.2-.8-53 7 20-.3 33 12.5 51.4 11.6-10 11.2-37.2-4.2-53-1.6 19.3 4 34 20 48.7 20.8-12 9.2-34.5-11.8-52.8-9.1 18.8 5 34.6 26.4 45.4 26.9-11.6 8-34.6-18.3-50.3-17.4 19 8.7 27.8 30.5 40.4 33.6-15.5 5-30.8-23.7-47.5-24.7 19.3 12.2 20.4 30.8 35.3 39-15.6 4-26.8-28.5-43.3-31.2 15.9 11.6 18.2 36.5 28.8 44.4-16 .8-21.7-33.1-38-38 14 11.7 10.6 37 21.4 47.9-16.5-3.4-14.4-33-31.7-43 12.4 15.8 6 38.1 14.2 50.7-16.2-6.5-9.1-33-24.6-48 8.4 16.8-.6 36.3 6 52.5-14.7-7.2-4.8-38.5-16.1-51 5.2 19.4-4.4 35.4-.5 52.7-15.1-17.5 2.3-35-10.8-53 3.4 20.6-10.9 34.8-8.6 52-12-14 6.4-36.5-2.9-54.1 2 20.1-16.5 37.7-15.2 50.4-9.7-16.2 10.8-35.4 5.3-53.9-1.2 19.2-19.8 29.6-23.3 47-6.3-19.2 15.9-33.1 14-52-6.4 18-24.4 25.2-30.8 42.6-5.2-19.2 21.1-29.4 21.8-49.6-8.1 19-29.7 23.1-36.8 37.6-2.7-19 27.5-27.6 28.6-45.7-9.7 17.4-33.3 18-41.5 31.9-1.2-19 30.6-21.4 35.6-41.3-9.7 14.8-35.6 13-46.3 25 1.7-17.7 36-18.8 41.5-34.6-12.8 12.3-36.5 7.2-50 17 7.5-17.4 39.8-13.7 47-26.3-14.2 7.5-39.5.3-52 7.7 11.4-16.4 36.5-6.6 50.7-18-23.1 3.4-37-5.8-53-1.5z"
        />
        <path
          fill="#ff0"
          d="M393.4 208.2a80.7 80.7 0 1 1-161.3 0 80.7 80.7 0 0 1 161.3 0"
        />
        <path
          fill="red"
          d="M383 208.4a70.1 70.1 0 1 1-140.2 0 70.1 70.1 0 0 1 140.3 0z"
        />
        <path
          fill="#ff0"
          d="M373.3 208.5a60.2 60.2 0 1 1-120.5 0 60.2 60.2 0 0 1 120.5 0"
        />
        <path
          fill="red"
          d="M261.8 169c16.7-.3 37.4 1.2 51.1 12.2a79 79 0 0 1 49.2-11.7l9 16.4c-13-1.3-25.7.5-40.7 6.6a69.3 69.3 0 0 1 28.1 58.6c-2.2 2.8-5.6 5.8-7.8 8.5 3.2-23.1-9-49-26.8-62.6 14.4 20.9 23 39.6 20.6 65.5l-8.2 5.1c3.8-22.8-1.5-49.5-18.4-65a87.5 87.5 0 0 1 13.4 65.8c-2.6.8-6.6 3-9.3 3.8a78 78 0 0 0-8.8-64 77.6 77.6 0 0 0-8.5 63.4l-8.6-2.5c-4.6-24.5 1.8-52 12.9-66.4-11.3 6.6-22 34.7-19 63.4l-7.6-3.5c-3.7-21.4 6-49.3 20-65.4-15.8 10-28.7 34.4-26.4 60.7-2.4-2.1-4.7-3.2-7.1-5.3-2.8-23 10.5-46.1 26-60a87.6 87.6 0 0 0-40.6-6.7c2.5-5.3 5-11.5 7.5-16.8z"
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
export class SvgKgFlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}

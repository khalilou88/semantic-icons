import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-it-42-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
    >
      <defs>
        <mask
          id="a"
          width="512"
          height="512"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="256" cy="256" r="256" fill="#fff" />
        </mask>
      </defs>
      <g mask="url(#a)">
        <path
          fill="#d80027"
          d="m345.1 0 26.7 253L345 512H167l-26-261.1L167.2 0h177.9Z"
        />
        <path fill="#338af3" d="M512 0v512H345.1V0H512Z" />
        <path fill="#6da544" d="M167.1 0v512H0V0h167.1Z" />
        <path
          fill="#eee"
          d="M256 144c44.2 0 80 17.9 80 40v88H176v-88c0-22.1 35.8-40 80-40Z"
        />
        <path
          fill="#acabb1"
          fill-rule="evenodd"
          d="M230.5 192.1c-.3.4-9.6-1.2-10-1-.5.3-3.5 9-4 9s-3.7-8.9-4.1-9.2c-.4-.2-9.5 1.6-9.8 1.2-.2-.4 6-7.7 6-8.2 0-.5-6.2-7.5-6-7.9.3-.4 9.6 1.3 10 1 .5-.2 3.5-9 4-9s3.7 9 4.1 9.2c.4.2 9.5-1.6 9.8-1.2.2.5-5.9 7.7-5.9 8.2 0 .5 6.1 7.5 5.9 8Zm80.5 0c-.3.4-9.7-1.2-10.1-1-.4.3-3.4 9-3.9 9s-3.7-8.9-4.2-9.2c-.4-.2-9.5 1.6-9.7 1.2-.3-.4 5.9-7.7 5.9-8.2 0-.5-6.2-7.5-6-7.9.3-.4 9.7 1.3 10.1 1 .5-.2 3.4-9 4-9 .4 0 3.6 9 4 9.2.5.2 9.6-1.6 9.8-1.2.3.5-5.9 7.7-5.9 8.2 0 .5 6.2 7.5 6 8Zm0 62.2c-.3.4-9.7-1.3-10.1-1-.4.2-3.4 9-3.9 9s-3.7-9-4.2-9.2c-.4-.2-9.5 1.6-9.7 1.2-.3-.5 5.9-7.7 5.9-8.2 0-.5-6.2-7.5-6-8 .3-.3 9.7 1.3 10.1 1 .5-.2 3.4-9 4-9 .4 0 3.6 9 4 9.3.5.2 9.6-1.6 9.8-1.2.3.4-5.9 7.7-5.9 8.2 0 .5 6.2 7.5 6 7.9Zm-80.5 0c-.3.4-9.6-1.3-10-1-.5.2-3.5 9-4 9s-3.7-9-4.1-9.2c-.4-.2-9.5 1.6-9.8 1.2-.2-.5 6-7.7 6-8.2 0-.5-6.2-7.5-6-8 .3-.3 9.6 1.3 10 1 .5-.2 3.5-9 4-9s3.7 9 4.1 9.3c.4.2 9.5-1.6 9.8-1.2.2.4-5.9 7.7-5.9 8.2 0 .5 6.1 7.5 5.9 7.9ZM224 280a48 48 0 1 0 96 0h16a80 80 0 1 1-160 0h48Z"
        />
        <path fill="#acabb1" d="M252 272h8v64h-8z" />
        <path
          fill="#d80027"
          d="M336 208h-76v-64a163 163 0 0 0-8 0v64h-76v8h76v56h8v-56h76v-8Z"
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
export class SvgIt42FlagIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}

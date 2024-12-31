import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-wiphala-flag-icon',
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
        <path fill="#eee" d="M0 73V0h73l439 439v73h-73Z" />
        <path
          fill="#ffda44"
          d="M73 0v73h73v73h73v73h74v74h73v73h73v73h73v-73l-73-73-73-73v-1l-73-73-74-73-73-73H73z"
        />
        <path
          fill="#ff9811"
          d="M146 0v73h73v73h74v73h73v74h73v73h73v-73l-73-74L293 73 219 0h-73z"
        />
        <path
          fill="#d80027"
          d="M219 0v73h74v73h73v73h73v74h73v-74l-73-73-73-73-73-73h-74z"
        />
        <path
          fill="#4a1f63"
          d="M293 0v73h73v73h73v73h73v-73l-73-73-73-73h-73z"
        />
        <path fill="#0052b4" d="M366 0v73h73v73h73V73L439 0h-73z" />
        <path
          fill="#6da544"
          d="M439 0v73h73V0Zm0 512v-73h-74v-73h-73v-73h-73v-74h-73v-73H73V73H0v73l73 73 73 73v1l73 73 73 73 73 73z"
        />
        <path
          fill="#0052b4"
          d="M366 512v-73h-74v-73h-73v-73h-73v-74H73v-73H0v73l73 74 146 146 73 73z"
        />
        <path
          fill="#4a1f63"
          d="M292 512v-73h-73v-73h-73v-73H73v-74H0v74l73 73 73 73 73 73z"
        />
        <path
          fill="#d80027"
          d="M219 512v-73h-73v-73H73v-74H0v74l73 73 73 73z"
        />
        <path fill="#ff9811" d="M146 512v-73H73v-73H0v73l73 73z" />
        <path fill="#ffda44" d="M73 512v-73H0v73z" />
      </g>
    </svg>
  `,
  host: {
    '[class.svg-host]': 'true',
  },
  styles: `
    .svg-host {
      display: contents;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgWiphalaFlagIcon {
  readonly class = input<string>('');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-gitconnected-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Gitconnected</title>
      <path
        d="M6.734 5.42C2.865 5.42 0 8.405 0 12.035c0 3.607 2.842 6.545 6.688 6.545 3.859 0 6.708-2.936 6.755-6.58l.002-.08c.03-2.19 1.504-3.967 3.797-3.967 2.268 0 3.87 1.838 3.87 4.082 0 2.222-1.483 4.037-3.823 4.037-1.334 0-2.43-.657-3.107-1.656a7.557 7.557 0 0 1-1.41 2.53c1.163 1.013 2.71 1.634 4.47 1.634 3.893 0 6.758-2.986 6.758-6.592 0-3.63-2.841-6.568-6.71-6.568-3.828 0-6.672 2.922-6.733 6.5-.015.04 0 .101 0 .115 0 2.222-1.482 4.037-3.823 4.037-2.244 0-3.845-1.84-3.845-4.084 0-2.221 1.482-4.035 3.799-4.035 1.232 0 2.254.554 2.943 1.41l1.385-2.449A6.75 6.75 0 0 0 6.734 5.42Z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': 'class()',
  },
  styles: `
    .svg {
      display: block;
    }

    .svg svg {
      width: 100%;
      height: 100%;
    }
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgGitconnectedIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

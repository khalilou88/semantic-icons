import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-apachesolr-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Apache Solr</title>
      <path
        d="M20.741 3.8L8.926 16.573l14.849-6.851A11.979 11.979 0 0 0 20.741 3.8M11.975 0c-1.637 0-3.197.328-4.619.921l-1.585 13.36L13.693.124A12.168 12.168 0 0 0 11.975 0m11.918 10.459l-14.07 7.874 13.201-1.566a11.976 11.976 0 0 0 .869-6.308m-5.188 11.527a12.084 12.084 0 0 0 3.8-4.16l-12.374 2.457 8.574 1.703zM14.417.249L7.53 15.177 20.306 3.36A11.978 11.978 0 0 0 14.417.249M12.98 24a11.938 11.938 0 0 0 3.774-.945l-6.931-.822L12.98 24zM1.016 7.08a11.944 11.944 0 0 0-1.013 3.864l1.867 3.337-.854-7.201zm5.298-5.665a12.076 12.076 0 0 0-4.236 3.784l1.743 8.773L6.314 1.415z"
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
export class SvgApachesolrIcon {
  readonly class = input<string>('');

  readonly svgClass = input<string>('');
}

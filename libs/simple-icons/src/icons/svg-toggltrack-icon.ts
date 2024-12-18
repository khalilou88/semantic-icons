import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-toggltrack-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Toggl Track</title>
      <path
        d="M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-.883 4.322h1.766v8.757h-1.766zm-.74 2.053v1.789a4.448 4.448 0 1 0 3.247 0V6.375a6.146 6.146 0 1 1-5.669 10.552 6.145 6.145 0 0 1 2.421-10.552z"
      />
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
export class SvgToggltrackIcon {
  readonly _hostClass = input('', { alias: 'class' });

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}

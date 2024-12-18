import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-mercedes-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_class()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Mercedes</title>
      <path
        d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12S0 18.623 0 12 5.377 0 12 0zM3.245 17.539A10.357 10.357 0 0012 22.36c3.681 0 6.917-1.924 8.755-4.821L12 14.203zm10.663-6.641l7.267 5.915A10.306 10.306 0 0022.36 12c0-5.577-4.417-10.131-9.94-10.352zm-2.328-9.25C6.057 1.869 1.64 6.423 1.64 12c0 1.737.428 3.374 1.185 4.813l7.267-5.915z"
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
export class SvgMercedesIcon {
  readonly _class = input('', { alias: 'class' });

  readonly _hostClass = input('', { alias: 'hostClass' });
}
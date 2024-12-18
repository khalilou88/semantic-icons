import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-paperlessngx-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Paperless-ngx</title>
      <path
        d="M6.338 23.028c-.117-.56-.353-1.678-.382-1.678-4.977-2.975-4.388-8.128-2.739-11.073.353 3.71 6.92 6.273 3.092 10.808-.03.059.177.765.353 1.413.766-1.296 1.915-2.856 1.856-3.004C3.806 8.01 18.53 7.126 21.592 0c1.385 6.89-.706 17.55-12.544 20.26-.06.03-2.15 3.71-2.238 3.74 0-.059-.884-.03-.766-.324.059-.177.177-.412.294-.648zm-.147-2.768c1.502-1.737-.265-4.712-1.325-5.683 1.796 3.092 1.679 4.888 1.325 5.683z"
      />
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_computedHostClass()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgPaperlessngxIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}

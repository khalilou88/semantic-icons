import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-akaunting-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Akaunting</title>
      <path
        d="M15.146 18.673a7.352 7.352 0 0 1-3.148.704 7.344 7.344 0 0 1-4.538-1.561l-3.013 3.511A11.956 11.956 0 0 0 11.998 24c1.913 0 3.721-.448 5.326-1.244l-2.178-4.083Zm4.229 2.792V24h4.623V12c0-6.627-5.372-12-12-12C5.473 0 .165 5.208.002 11.693h4.626a7.377 7.377 0 1 1 11.034 6.711l2.177 4.081a12 12 0 0 0 1.536-1.02ZM7.016 17.44a7.352 7.352 0 0 1-2.389-5.165H.002a11.97 11.97 0 0 0 4.002 8.675l3.012-3.51Z"
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
export class SvgAkauntingIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-googlecloudcomposer-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Google Cloud Composer</title>
      <path
        d="M9.636 4.752h-6.42V0h17.556v4.728h-6.36v6.396H9.636V4.752zm-6.42 1.692h4.74v6.36h6.408V24H9.636v-6.42h-6.42V6.444zm12.84-.012h4.728V24h-4.728V6.432zM7.92 24H3.216v-4.728H7.92V24z"
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
export class SvgGooglecloudcomposerIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}

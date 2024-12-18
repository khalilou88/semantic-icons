import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-magasinsu-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Magasins U</title>
      <path
        d="M17.49 7.179h-3.51c-.642 0-.73.26-.73.654v5.7c-.044 1.305-.53 1.723-1.46 1.723-.956 0-1.444-.44-1.464-1.828V7.833c0-.393-.092-.654-.734-.654h-3.51v6.78c0 1.5.29 2.134.912 2.778.962 1 2.645 1.423 4.794 1.423 2.15 0 3.834-.422 4.798-1.423.62-.644.911-1.278.911-2.778zM14.26.906C8.425-.23 2.7 3.809 1.47 9.924.246 16.042 3.98 21.92 9.817 23.054c5.84 1.132 11.565-2.905 12.792-9.02C23.834 7.917 20.1 2.038 14.261.904m-2.465 21.384c-5.664 0-10.253-4.582-10.253-10.234 0-5.65 4.59-10.23 10.253-10.23 5.661 0 10.253 4.58 10.253 10.23 0 5.652-4.592 10.234-10.253 10.234M.026 11.136C-.4 17.289 4.367 22.646 10.869 23.2c-.348-.03-.699-.08-1.052-.147C3.981 21.92.244 16.04 1.471 9.924 2.69 3.85 8.346-.172 14.14.884c-.488-.094-.98-.16-1.486-.196C6.041.235.46 4.91.028 11.138M13.388.755a7.678 7.678 0 0 0-.774-.037 9.913 9.913 0 0 1 1.648.186c5.836 1.134 9.573 7.01 8.346 13.128-1.228 6.114-6.953 10.153-12.79 9.02a10.052 10.052 0 0 1-.767-.182c.992.306 2.06.473 3.183.473 1.126 0 1.996-.152 2.827-.34 3.604-.816 6.523-3.342 7.98-6.506.635-1.421.961-2.96.959-4.515-.001-6.26-4.916-10.743-10.613-11.226"
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
export class SvgMagasinsuIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}

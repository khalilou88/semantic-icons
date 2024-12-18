import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-homebridge-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Homebridge</title>
      <path
        d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm8.116 12.262a.74.74 0 0 1-.741-.74c0-.008.005-.016.005-.025l-1.46-1.46a1.31 1.31 0 0 1-.38-.917V5.731a.285.285 0 0 0-.284-.283h-.915a.284.284 0 0 0-.284.283v2.413L12.17 4.383a.284.284 0 0 0-.4.003L4.438 11.72a.283.283 0 0 0 0 .4l.696.697a.286.286 0 0 0 .4 0l5.635-5.552a1.302 1.302 0 0 1 1.83.008l5.525 5.525a1.3 1.3 0 0 1 0 1.836l-.679.68a1.305 1.305 0 0 1-1.824.012l-3.876-3.766a.283.283 0 0 0-.4.004l-3.723 3.74a.285.285 0 0 0 0 .4l.687.69a.283.283 0 0 0 .4 0l2.013-1.986a1.302 1.302 0 0 1 1.824 0l1.994 1.96.007.007a1.299 1.299 0 0 1 0 1.837l-1.985 1.984v.013a.74.74 0 1 1-.74-.741c.009 0 .016.005.025.005l1.975-1.98a.284.284 0 0 0 .084-.201.28.28 0 0 0-.085-.2l-1.995-1.96a.285.285 0 0 0-.4 0l-2.006 1.98a1.3 1.3 0 0 1-1.83-.004l-.69-.689a1.301 1.301 0 0 1 0-1.834l3.72-3.74a1.303 1.303 0 0 1 1.826-.016l3.879 3.758a.285.285 0 0 0 .4 0l.679-.679a.285.285 0 0 0 0-.4L12.28 7.986a.284.284 0 0 0-.4 0l-5.637 5.555a1.301 1.301 0 0 1-1.829-.008l-.698-.694-.002-.003a1.296 1.296 0 0 1 .002-1.834l7.334-7.334a1.305 1.305 0 0 1 1.821-.015l2.166 2.097v-.019a1.3 1.3 0 0 1 1.299-1.298h.916a1.3 1.3 0 0 1 1.298 1.298v3.384a.282.282 0 0 0 .083.2l1.467 1.467h.014a.74.74 0 0 1 .001 1.48z"
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
export class SvgHomebridgeIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}

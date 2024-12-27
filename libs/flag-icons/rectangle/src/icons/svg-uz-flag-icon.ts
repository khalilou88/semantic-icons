import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  computed,
  input,
} from '@angular/core';

import { cn } from '@semantic-components/utils';

@Component({
  selector: 'svg-uz-flag-icon',
  imports: [],
  template: `
    <svg
      id="flag-icons-uz"
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 480"
    >
      <path fill="#1eb53a" d="M0 320h640v160H0z" />
      <path fill="#0099b5" d="M0 0h640v160H0z" />
      <path fill="#ce1126" d="M0 153.6h640v172.8H0z" />
      <path fill="#fff" d="M0 163.2h640v153.6H0z" />
      <circle cx="134.4" cy="76.8" r="57.6" fill="#fff" />
      <circle cx="153.6" cy="76.8" r="57.6" fill="#0099b5" />
      <g fill="#fff" transform="translate(261.1 122.9)scale(1.92)">
        <g id="uz-e">
          <g id="uz-d">
            <g id="uz-c">
              <g id="uz-b">
                <path id="uz-a" d="M0-6-1.9-.3 1 .7" />
                <use
                  xlink:href="#uz-a"
                  width="100%"
                  height="100%"
                  transform="scale(-1 1)"
                />
              </g>
              <use
                xlink:href="#uz-b"
                width="100%"
                height="100%"
                transform="rotate(72)"
              />
            </g>
            <use
              xlink:href="#uz-b"
              width="100%"
              height="100%"
              transform="rotate(-72)"
            />
            <use
              xlink:href="#uz-c"
              width="100%"
              height="100%"
              transform="rotate(144)"
            />
          </g>
          <use xlink:href="#uz-d" width="100%" height="100%" y="-24" />
          <use xlink:href="#uz-d" width="100%" height="100%" y="-48" />
        </g>
        <use xlink:href="#uz-e" width="100%" height="100%" x="24" />
        <use xlink:href="#uz-e" width="100%" height="100%" x="48" />
        <use xlink:href="#uz-d" width="100%" height="100%" x="-48" />
        <use xlink:href="#uz-d" width="100%" height="100%" x="-24" />
        <use xlink:href="#uz-d" width="100%" height="100%" x="-24" y="-24" />
      </g>
    </svg>
  `,
  host: {
    '[class.svg]': 'true',
    '[class]': '_class()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SvgUzFlagIcon {
  readonly class = input<string>('');

  protected readonly _class = computed(() => cn('block', this.class()));

  readonly svgClass = input<string>('');

  protected readonly _svgClass = computed(() =>
    cn('size-full', this.svgClass()),
  );
}

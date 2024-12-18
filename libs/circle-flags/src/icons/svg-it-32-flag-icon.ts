import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-it-32-flag-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      xmlns="http://www.w3.org/2000/svg"
      width="512"
      height="512"
      data-name="Layer 1"
    >
      <defs>
        <mask
          id="a"
          width="512"
          height="512"
          x="0"
          y="0"
          maskUnits="userSpaceOnUse"
        >
          <circle cx="256" cy="256" r="256" fill="#fff" />
        </mask>
      </defs>
      <g mask="url(#a)">
        <path fill="#0052b4" d="M0 512V256l256-64 256 64v256H0Z" />
        <path fill="#eee" d="M0 256V0h512v256H0Z" />
        <path
          fill="#eee"
          d="M130 108.3v192c0 66.6 56.7 124.5 125.8 124.5s126-58 126-124.6v-192l-126 .7-125.9-.6Z"
        />
        <path
          fill="#333"
          d="M255.8 428.8C185.4 428.8 126 370 126 300.2v-196l130 .7 129.9-.6v196c0 69.6-59.5 128.5-130 128.5ZM134 112.3v188c0 65.3 55.8 120.5 122 120.5 66 0 121.9-55.2 121.9-120.6V112.3l-122 .6-121.9-.6Z"
        />
        <path
          fill="#333"
          d="M259.8 423.9h-8V260.5H130.1v-8h121.7V110.2h8v142.3h121.1v8H259.8v163.4z"
        />
        <path
          fill="#333"
          d="M189.2 141.6c-5 0-10.7 2.5-13.8 8.8 3.1-1.9 10-.6 10 8.2 0 2.5-1.2 5-3.1 6.3-5 0-8.8-8.9-18.3-8.9-6.2 0-12 4.5-12 10.7v43.4l29-4.4-8.8 17h41.5l-8.8-17 29 4.4v-43.4c0-6.2-5.7-10.7-12-10.7-9.4 0-13.2 8.9-18.2 8.9 5-14.5-4.4-23.3-14.5-23.3Z"
        />
        <path
          fill="#d80027"
          d="M315.3 141.6c-5 0-10.7 2.5-13.8 8.8 3.1-1.9 10-.6 10 8.2 0 2.5-1.2 5-3.1 6.3-5 0-8.8-8.9-18.2-8.9-6.3 0-12 4.5-12 10.7v43.4l29-4.4-8.9 17h41.5l-8.8-17 29 4.4v-43.4c0-6.2-5.7-10.7-12-10.7-9.4 0-13.2 8.9-18.2 8.9 5-14.5-4.4-23.3-14.5-23.3ZM189.2 279c-5 0-10.7 2.6-13.8 8.9 3.1-1.9 10-.6 10 8.2 0 2.5-1.2 5-3.1 6.3-5 0-8.8-8.8-18.3-8.8-6.2 0-12 4.4-12 10.6v43.4l29-4.4-8.8 17h41.5l-8.8-17 29 4.4v-43.4c0-6.2-5.7-10.6-12-10.6-9.4 0-13.2 8.8-18.2 8.8 5-14.5-4.4-23.3-14.5-23.3Z"
        />
        <path
          fill="#333"
          d="M315.3 279c-5 0-10.7 2.6-13.8 8.9 3.1-1.9 10-.6 10 8.2 0 2.5-1.2 5-3.1 6.3-5 0-8.8-8.8-18.2-8.8-6.3 0-12 4.4-12 10.6v43.4l29-4.4-8.9 17h41.5l-8.8-17 29 4.4v-43.4c0-6.2-5.7-10.6-12-10.6-9.4 0-13.2 8.8-18.2 8.8 5-14.5-4.4-23.3-14.5-23.3Z"
        />
      </g>
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
export class SvgIt32FlagIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}

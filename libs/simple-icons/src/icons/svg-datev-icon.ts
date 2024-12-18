import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg-datev-icon',
  standalone: true,
  imports: [],
  template: `
    <svg
      [class]="_svgClass()"
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>DATEV</title>
      <path
        d="M0 .165v16.9174h23.9147V.1651Zm.017 18.1842v5.4857h1.9809c1.4754 0 2.7429-1.1832 2.7429-2.7005-.042-1.686-1.0982-2.7852-2.5736-2.7852zm6.62 0-2.1079 5.4857H5.706l1.6422-4.3428 1.3546 3.454h-1.524v.8888h3.0392l-2.1502-5.4857Zm2.6498 0v.9312h1.7778v4.5545h1.219v-4.5545h1.727v-.9312zm5.1894 0v5.4857h3.7926v-.8889h-2.6159v-1.5153h2.3196v-.9313h-2.3196v-1.219h2.4889v-.9312zm3.962 0 2.1502 5.4857h1.3037L24 18.3492h-2.9037v.9312h1.3884l-1.2699 3.327-1.5577-4.2582zm-17.2869.9312h.9313c.9271 0 1.5576.6735 1.5153 1.8117-.042 1.1804-.8425 1.8116-1.8116 1.8116h-.635Z"
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
export class SvgDatevIcon {
  readonly _hostClass = input('', { alias: 'class' });

  _computedHostClass = computed(() => 'block'.concat(' ', this._hostClass()));

  readonly _svgClass = input('size-full', { alias: 'svgClass' });
}

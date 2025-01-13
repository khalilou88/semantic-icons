import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-time-zone-line-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4 12C4 9.84636 4.85101 7.89148 6.23509 6.45329C6.35689 6.56446 6.46246 6.70541 6.54129 6.88256C6.74529 7.34029 6.74529 7.8112 6.74529 8.22764C6.74488 8.55598 6.74449 8.86735 6.84992 9.09302C6.99443 9.40134 7.6164 9.53227 8.16548 9.64736L8.18515 9.6515C8.37513 9.69149 8.57011 9.73254 8.74797 9.78176C9.25405 9.92233 9.64554 10.3765 9.95938 10.7412C10.0896 10.8931 10.2819 11.1163 10.3783 11.1717C10.4286 11.1356 10.59 10.9608 10.6699 10.6735C10.7307 10.4547 10.7134 10.2597 10.6239 10.1543C10.0648 9.49445 10.0952 8.2232 10.268 7.75495C10.5402 7.01606 11.3905 7.07058 12.012 7.11097L12.0178 7.11135C12.2474 7.12612 12.464 7.14006 12.6257 7.11976C13.097 7.06062 13.3212 6.50376 13.4611 6.15632C13.5059 6.0449 13.5421 5.95502 13.575 5.91C13.8398 5.54726 14.5987 5.01813 15.1519 4.64482C17.2241 5.53398 18.8451 7.27325 19.5762 9.42384C20.4295 9.71393 21.2182 10.1442 21.9146 10.6871C21.2717 5.7847 17.0778 2 12 2C6.47715 2 2 6.47715 2 12C2 17.0778 5.7847 21.2717 10.6871 21.9146C10.1442 21.2182 9.71393 20.4295 9.42384 19.5762C6.26947 18.5039 4 15.517 4 12ZM17 13C14.7909 13 13 14.7909 13 17C13 19.2091 14.7909 21 17 21C19.2091 21 21 19.2091 21 17C21 14.7909 19.2091 13 17 13ZM11 17C11 13.6863 13.6863 11 17 11C20.3137 11 23 13.6863 23 17C23 20.3137 20.3137 23 17 23C13.6863 23 11 20.3137 11 17ZM16 14V18H20V16H18V14H16Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTimeZoneLineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-xmark-alt-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="m16.9757 15.4642 1.7677 1.7678m0 0 1.7678 1.7678m-1.7678-1.7678-1.7677 1.7678m1.7677-1.7678 1.7678-1.7678M7.21425 11l5.00005-6 5 6M7.21425 11h-3v8H13.294m-6.07975-8H3.21426l3-4h4.33744l-3.33745 4Zm10.00005 0h3v1.5574m-3-1.5574h3.9999l-3-4h-4.3373l3.3374 4Zm-3 2c0 1.1046-.8955 2-2 2-1.1046 0-2-.8954-2-2s.8954-2 2-2c1.1045 0 2 .8954 2 2Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSchoolXmarkAltIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

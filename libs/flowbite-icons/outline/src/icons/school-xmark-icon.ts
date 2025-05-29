import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-school-xmark-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      stroke="currentColor"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M8.07141 20v-9l-4 1.125V20h4Zm0 0V6.66667m0 13.33333h3.99999m4-9V6.66667m0 4.33333 4 1.125V13m-4-2v2m2-5-6-4-5.99999 4m4.99999 1h2m-2 3h2m3.0148 4.4087 1.7678 1.7678m0 0 1.7678 1.7677m-1.7678-1.7677-1.7678 1.7677m1.7678-1.7677 1.7678-1.7678"
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
export class SiSchoolXmarkIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

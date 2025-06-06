import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-repartition-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15.67 17H19v2h-3.33zm-5.34 0h3.33v2h-3.33zM5 17h3.33v2H5z"
      opacity=".3"
    />
    <svg:path
      d="M3 21h18v-6H3v6zm12.67-4H19v2h-3.33v-2zm-5.34 0h3.33v2h-3.33v-2zM5 17h3.33v2H5v-2zm1-7 1.42-1.42L5.83 7H17c1.1 0 2 .9 2 2s-.9 2-2 2H3v2h14c2.21 0 4-1.79 4-4s-1.79-4-4-4H5.83l1.59-1.59L6 2 2 6l4 4z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiRepartitionIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

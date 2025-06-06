import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mastercard-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill="currentColor"
      fill-rule="evenodd"
      d="M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4Zm5.178 12.137a4.137 4.137 0 1 1 1.036-8.144A6.113 6.113 0 0 0 8.726 12c0 1.531.56 2.931 1.488 4.006a4.114 4.114 0 0 1-1.036.131ZM10.726 12c0-1.183.496-2.252 1.294-3.006A4.125 4.125 0 0 1 13.315 12a4.126 4.126 0 0 1-1.294 3.006A4.126 4.126 0 0 1 10.726 12Zm4.59 0a6.11 6.11 0 0 1-1.489 4.006 4.137 4.137 0 1 0 0-8.013A6.113 6.113 0 0 1 15.315 12Z"
      clip-rule="evenodd"
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
export class SiMastercardIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('none');
}

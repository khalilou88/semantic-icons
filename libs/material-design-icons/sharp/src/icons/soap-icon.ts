import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-soap-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M14.25 6c.41 0 .75.34.75.75s-.34.75-.75.75-.75-.34-.75-.75.34-.75.75-.75m0-1.5C13.01 4.5 12 5.51 12 6.75S13.01 9 14.25 9s2.25-1.01 2.25-2.25-1.01-2.25-2.25-2.25zm5.75 1c.28 0 .5.22.5.5s-.22.5-.5.5-.5-.22-.5-.5.22-.5.5-.5M20 4c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-2-1.5c0 .83-.67 1.5-1.5 1.5S15 3.33 15 2.5 15.67 1 16.5 1s1.5.67 1.5 1.5zM1 12.68V23h18v-2.5h-7v-1h9V17h-9v-1h10v-2.5H12v-1h8V10H8.86l1.88-3.3L9.12 5 1 12.68z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiSoapIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

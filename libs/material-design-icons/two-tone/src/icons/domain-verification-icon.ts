import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-domain-verification-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5 18h14V8H5v10zm3.82-6.42 2.12 2.12 4.24-4.24 1.41 1.41-5.66 5.66L7.4 13l1.42-1.42z"
      opacity=".3"
    />
    <svg:path d="m16.6 10.88-1.42-1.42-4.24 4.25-2.12-2.13L7.4 13l3.54 3.54z" />
    <svg:path
      d="M19 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6a2 2 0 0 0-2-2zm0 14H5V8h14v10z"
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
export class SiDomainVerificationIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-report-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M12 7c.55 0 1 .45 1 1v1.33l7.2 7.2.51-.51a.99.99 0 0 0 .29-.71V8.68c0-.27-.11-.52-.29-.71l-4.68-4.68c-.19-.18-.45-.29-.71-.29H8.68c-.26 0-.52.11-.7.29l-.51.51 3.69 3.69c.17-.29.48-.49.84-.49zM2.41 1.58 1 2.99l3.64 3.64-1.35 1.35c-.18.18-.29.44-.29.7v6.63c0 .27.11.52.29.71l4.68 4.68c.19.19.45.3.71.3h6.63c.27 0 .52-.11.71-.29l1.35-1.35L21.01 23l1.41-1.41L2.41 1.58zM12 17.3c-.72 0-1.3-.58-1.3-1.3 0-.72.58-1.3 1.3-1.3s1.3.58 1.3 1.3c0 .72-.58 1.3-1.3 1.3z"
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
export class SiReportOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

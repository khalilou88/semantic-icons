import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-mail-dot-com-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>mail.com</svg:title>
    <svg:path
      d="M18.017-.0085H0V15.66c0 1.4057.96 2.5714 2.2457 2.9143L24 24.0085V5.9915c.0172-3.3086-2.6743-6-5.9828-6zm3 15.6685H18V8.7857c0-.6685-.223-2.2285-2.2115-2.2285-1.32 0-2.28.9085-2.28 2.2285V15.66h-3.0171V8.7857c0-.6685-.2057-2.2285-2.1943-2.2285-1.3543 0-2.28.9085-2.28 2.2285V15.66H3V3.6086h5.297c1.5943 0 2.8971.6343 3.7371 1.6629.8915-1.0286 2.2115-1.6629 3.7372-1.6629 3.2914 0 5.2285 2.1771 5.2285 5.2457l.0172 6.8057z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiMailDotComIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#004788');
}

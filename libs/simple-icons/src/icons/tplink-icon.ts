import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-tplink-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:title>TP-Link</svg:title>
    <svg:path
      d="M15.185 0C10.218 0 6.25 3.984 6.25 8.903V10.8h4.99V8.903c0-2.135 1.736-3.863 3.946-3.863 2.187 0 3.708 1.536 3.708 3.815 0 2.257-1.64 3.912-3.827 3.912h-1.878v5.039h1.878c4.874 0 8.819-4.007 8.819-8.952C23.885 3.72 20.2 0 15.185 0zM.115 12.6v4.103c0 .624.523 1.248 1.236 1.248h4.753v4.801c0 .624.523 1.248 1.236 1.248h4.065V12.6Z"
    />
  `,
  host: {
    role: 'img',
    '[attr.xmlns]': 'xmlns()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTplinkIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('#4ACBD6');
}

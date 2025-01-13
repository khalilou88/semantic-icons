import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-capture-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M8 3a1 1 0 0 1 .117 1.993l-.117 .007h-2a1 1 0 0 0 -.993 .883l-.007 .117v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h2z"
    />
    <svg:path
      d="M4 15a1 1 0 0 1 .993 .883l.007 .117v2a1 1 0 0 0 .883 .993l.117 .007h2a1 1 0 0 1 .117 1.993l-.117 .007h-2a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-2a1 1 0 0 1 1 -1z"
    />
    <svg:path
      d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v2a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 0 -.883 -.993l-.117 -.007h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2z"
    />
    <svg:path
      d="M20 15a1 1 0 0 1 .993 .883l.007 .117v2a3 3 0 0 1 -2.824 2.995l-.176 .005h-2a1 1 0 0 1 -.117 -1.993l.117 -.007h2a1 1 0 0 0 .993 -.883l.007 -.117v-2a1 1 0 0 1 1 -1z"
    />
    <svg:path
      d="M12 8a4 4 0 1 1 -3.995 4.2l-.005 -.2l.005 -.2a4 4 0 0 1 3.995 -3.8z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCaptureIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

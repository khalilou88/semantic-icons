import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-pig-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M15.999 2a1 1 0 0 1 1.001 1v3.255l.026 .018a7 7 0 0 1 2.204 2.537l.092 .19h.676a2 2 0 0 1 1.995 1.85l.005 .15v2a2 2 0 0 1 -2 2h-.676l-.104 .213a7 7 0 0 1 -1.097 1.558l-.123 .125v1.604a2.5 2.5 0 0 1 -2.336 2.495l-.162 .005c-1.16 0 -2.135 -.79 -2.418 -1.86l-.032 -.141l-4.05 .001l-.05 -.002l-.032 .141a2.5 2.5 0 0 1 -2.254 1.856l-.164 .005a2.5 2.5 0 0 1 -2.5 -2.5v-1.602l-.056 -.055a7 7 0 0 1 -1.576 -7.085l.092 -.256a7 7 0 0 1 6.539 -4.502h2.196l4.25 -2.832a1 1 0 0 1 .436 -.161zm-.999 8a1 1 0 0 0 -.993 .883l-.007 .127a1 1 0 0 0 1.993 .117l.007 -.127a1 1 0 0 0 -1 -1"
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
export class SiPigIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

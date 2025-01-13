import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-engine-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M14 4a1 1 0 0 1 0 2h-1v1h.383a2 2 0 0 1 1.787 1.106l1.45 2.894h.38v-1a1 1 0 0 1 .883 -.993l.117 -.007h2a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-2a1 1 0 0 1 -1 -1v-1h-1v1a2 2 0 0 1 -1.85 1.995l-.15 .005h-3.465a2 2 0 0 1 -1.664 -.89l-1.407 -2.11h-1.464a1 1 0 0 1 -.993 -.883l-.007 -.117v-2h-1v2a1 1 0 0 1 -2 0v-6a1 1 0 1 1 2 0v2h1v-2a1 1 0 0 1 1 -1h1.584l1.709 -1.707a1 1 0 0 1 .576 -.284l.131 -.009h1v-1h-1a1 1 0 1 1 0 -2z"
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
export class SiEngineIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

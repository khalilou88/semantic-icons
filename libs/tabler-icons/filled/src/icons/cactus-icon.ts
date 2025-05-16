import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-cactus-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <svg:path
      d="M7 22a1 1 0 0 1 -.117 -1.993l.117 -.007h2v-6a4 4 0 0 1 -3.995 -3.8l-.005 -.2v-1a1 1 0 0 1 1.993 -.117l.007 .117v1a2 2 0 0 0 1.85 1.995l.15 .005v-7a3 3 0 0 1 5.995 -.176l.005 .176v10a2 2 0 0 0 1.995 -1.85l.005 -.15v-5a1 1 0 0 1 1.993 -.117l.007 .117v5a4 4 0 0 1 -3.8 3.995l-.2 .005v3h2a1 1 0 0 1 .117 1.993l-.117 .007h-10z"
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
export class SiCactusIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

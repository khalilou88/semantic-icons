import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-attach-email-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m3 6 8 5 8-5v3h2V4c0-1.1-.9-2-2-2H3c-1.1 0-1.99.9-1.99 2L1 16c0 1.1.9 2 2 2h10v-2H3V6zm16-2-8 5-8-5h16z"
    />
    <svg:path
      d="M21 14v4c0 1.1-.9 2-2 2s-2-.9-2-2v-4.5c0-.28.22-.5.5-.5s.5.22.5.5V18h2v-4.5a2.5 2.5 0 0 0-5 0V18c0 2.21 1.79 4 4 4s4-1.79 4-4v-4h-2z"
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
export class SiAttachEmailIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

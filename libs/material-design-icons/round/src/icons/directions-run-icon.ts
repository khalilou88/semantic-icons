import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-directions-run-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm-3.17 12 .57-2.5 2.1 2v5c0 .55.45 1 1 1s1-.45 1-1v-5.64c0-.55-.22-1.07-.62-1.45l-1.48-1.41.6-3a7.321 7.321 0 0 0 4.36 2.41c.6.09 1.14-.39 1.14-1 0-.49-.36-.9-.85-.98-1.52-.25-2.78-1.15-3.45-2.33l-1-1.6c-.4-.6-1-1-1.7-1-.3 0-.5.1-.8.1L7.21 7.76a2.01 2.01 0 0 0-1.22 1.85v2.37c0 .55.45 1 1 1s1-.45 1-1v-2.4l1.8-.7-1.6 8.1-3.92-.8c-.54-.11-1.07.24-1.18.78V17c-.11.54.24 1.07.78 1.18l4.11.82a2 2 0 0 0 2.34-1.52z"
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
export class SiDirectionsRunIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

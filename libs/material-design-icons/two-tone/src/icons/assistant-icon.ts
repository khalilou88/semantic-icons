import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-assistant-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m9.83 18 .59.59L12 20.17l1.59-1.59.58-.58H19V4H5v14h4.83zm.29-8.88L12 5l1.88 4.12L18 11l-4.12 1.88L12 17l-1.88-4.12L6 11l4.12-1.88z"
      opacity=".3"
    />
    <svg:path
      d="M5 20h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2zM5 4h14v14h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4zm7 13 1.88-4.12L18 11l-4.12-1.88L12 5l-1.88 4.12L6 11l4.12 1.88z"
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
export class SiAssistantIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

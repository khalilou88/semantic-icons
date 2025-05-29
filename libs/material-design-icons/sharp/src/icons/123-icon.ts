import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-123-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M7 15H5.5v-4.5H4V9h3v6zm6.5-1.5h-3v-1h3V9H9v1.5h3v1H9V15h4.5v-1.5zm6 1.5V9H15v1.5h3v1h-2v1h2v1h-3V15h4.5z"
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
export class Si123Icon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

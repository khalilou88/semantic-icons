import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-carpenter-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M5.71 5.62 7 4.33l8.49 8.49-2.81 2.81L5.71 5.62z"
      opacity=".3"
    />
    <svg:path
      d="M19.73 14.23 7 1.5 3.11 5.39l8.13 11.67c-.78.78-.78 2.05 0 2.83l1.41 1.41c.78.78 2.05.78 2.83 0l4.24-4.24c.79-.78.79-2.05.01-2.83zM5.71 5.62 7 4.33l8.49 8.49-2.81 2.81L5.71 5.62zm8.36 14.26-1.41-1.41 4.24-4.24 1.41 1.41-4.24 4.24z"
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
export class SiCarpenterIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

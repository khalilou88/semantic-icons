import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-character-recognition-fill-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M20.998 3V21H2.99805V3H20.998ZM12.997 6H10.997L6.59805 17H8.75205L9.95105 14H14.041L15.242 17H17.397L12.997 6ZM11.997 8.88517L13.242 12H10.75L11.997 8.88517Z"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiCharacterRecognitionFillIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly viewBox = input<string>('0 0 24 24');

  readonly fill = input<string>('currentColor');
}

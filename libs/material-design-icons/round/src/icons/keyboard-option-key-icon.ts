import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-keyboard-option-key-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M15 6c0 .55.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-4c-.55 0-1 .45-1 1zM9.58 6c-.36-.62-1.02-1-1.73-1H4c-.55 0-1 .45-1 1s.45 1 1 1h3.85l6.35 11c.36.62 1.02 1 1.73 1H20c.55 0 1-.45 1-1s-.45-1-1-1h-4.07L9.58 6z"
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
export class SiKeyboardOptionKeyIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

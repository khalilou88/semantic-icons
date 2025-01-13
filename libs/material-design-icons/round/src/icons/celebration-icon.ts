import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-celebration-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m3.99 21.29 9.04-3.23c1.38-.49 1.78-2.26.74-3.3l-4.53-4.53c-1.04-1.04-2.8-.64-3.3.74l-3.23 9.04c-.28.8.48 1.56 1.28 1.28zM15.06 12l5.06-5.06a1.25 1.25 0 0 1 1.77 0l.06.06c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-.06-.06a2.758 2.758 0 0 0-3.89 0L14 10.94c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0zm-5-5.12-.06.06c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l.06-.06a2.758 2.758 0 0 0 0-3.89L11.07 4c-.3-.3-.78-.3-1.07 0-.29.29-.29.77 0 1.06l.06.06c.48.48.48 1.28 0 1.76zm7 5L16 12.94c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l1.06-1.06a1.25 1.25 0 0 1 1.77 0l1.08 1.08c.29.29.77.29 1.06 0 .29-.29.29-.77 0-1.06l-1.08-1.08a2.758 2.758 0 0 0-3.89 0zm-2-6L12 8.94c-.29.29-.29.77 0 1.06.29.29.77.29 1.06 0l3.06-3.06a2.758 2.758 0 0 0 0-3.89l-1.06-1.06a.754.754 0 0 0-1.06 0c-.29.29-.29.77 0 1.06l1.06 1.06c.48.49.48 1.29 0 1.77z"
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
export class SiCelebrationIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-do-not-step-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M2.1 3.51a.996.996 0 0 0 0 1.41l7.19 7.19c.18.2.18.5-.01.7a.485.485 0 0 1-.7 0L6.87 11.1c-.11.4-.26.78-.45 1.12l1.4 1.4c.2.2.2.51 0 .71a.485.485 0 0 1-.7 0l-1.27-1.27c-.24.29-.5.56-.77.8l1.28 1.28c.2.2.2.51 0 .71-.1.1-.23.15-.36.15s-.26-.05-.35-.15l-1.38-1.38c-.71.47-1.43.81-2.02 1.04A1.99 1.99 0 0 0 1 17.37V18c0 1.1.9 2 2 2h6.67c.53 0 1.04-.21 1.41-.59l2.74-2.74 5.23 5.23a.996.996 0 1 0 1.41-1.41L3.51 3.51a.996.996 0 0 0-1.41 0zm16.41 12.17-1.41-1.41 4.48-4.48c.78.78.78 2.05 0 2.83l-3.07 3.06zm2.37-6.6-4.48 4.48-7.1-7.09 3.09-3.07a2 2 0 0 1 2.82 0l5.67 5.68z"
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
export class SiDoNotStepIcon {
  readonly xmlns = input<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-kitesurfing-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M6 3c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm10.03.97c.29.29.77.29 1.06 0L20.06 1h-2.12l-1.91 1.91c-.29.29-.29.77 0 1.06zM19.15 12c-1.29 0-3.11.53-5.06 1.38L13 12.16c-.38-.42-.92-.66-1.49-.66H9.6V8H11c1.52 0 2.94-.49 4.09-1.32.49-.35.52-1.07.09-1.5-.35-.35-.9-.38-1.3-.09-.82.57-1.81.91-2.88.91H8c-1.1 0-2 .9-2 2v4.04c0 .64.15 1.27.45 1.83L8 16.84c-.53.38-1.03.78-1.49 1.17.68.58 1.55.99 2.49.99 1.2 0 2.27-.66 3-1.5.73.84 1.8 1.5 3 1.5.33 0 .65-.05.96-.14C18.81 16.9 21 14.72 21 13.28c0-1.03-1.01-1.28-1.85-1.28zm-9.32 3.61L9 13.6l2.5-.1.7.77c-.56.28-1.78.96-2.37 1.34zM22 22c0-.55-.45-1-1-1-.87 0-1.73-.24-2.53-.7a.954.954 0 0 0-.94 0c-1.59.9-3.47.9-5.06 0a.98.98 0 0 0-.94 0c-1.59.9-3.47.9-5.06 0a.98.98 0 0 0-.94 0c-.8.46-1.66.7-2.53.7-.55 0-1 .45-1 1s.45 1 1 1c1.15 0 2.3-.31 3.33-.94 1.66 1.11 3.78 1.01 5.58.14a6.36 6.36 0 0 0 6.09.05c.95.5 1.97.75 3 .75.55 0 1-.45 1-1z"
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
export class SiKitesurfingIcon {
  protected readonly xmlns = signal<string>('http://www.w3.org/2000/svg');

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

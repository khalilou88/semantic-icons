import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-flaky-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      fill-rule="evenodd"
      d="M12.16 15.72a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l.82.82L16 13.52c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-2.65 2.65c-.19.19-.51.2-.7 0l-1.55-1.51zM12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zM7.87 6.81l.88.88.88-.88c.29-.29.77-.29 1.06 0 .29.29.29.77 0 1.06l-.88.88.88.88c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0l-.88-.88-.88.88c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l.88-.88-.88-.88a.754.754 0 0 1 0-1.06c.29-.3.76-.3 1.06 0zM12 20c-2.2 0-4.2-.9-5.7-2.3L17.7 6.3C19.1 7.8 20 9.8 20 12c0 4.4-3.6 8-8 8z"
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
export class SiFlakyIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

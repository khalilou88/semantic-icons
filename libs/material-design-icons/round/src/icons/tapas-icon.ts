import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
  signal,
} from '@angular/core';

@Component({
  selector: 'svg[si-tapas-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M22 10V2c0-.55-.45-1-1-1h-6c-.55 0-1 .45-1 1v8c0 1.86 1.28 3.41 3 3.86V21h-1c-.55 0-1 .45-1 1s.45 1 1 1h4c.55 0 1-.45 1-1s-.45-1-1-1h-1v-7.14c1.72-.45 3-2 3-3.86zm-2-7v3h-4V3h4zM9.86 9H8V8h1.86c1.31 0 2.5-.94 2.63-2.24A2.5 2.5 0 0 0 10 3H8V2c0-.55-.45-1-1-1s-1 .45-1 1v1H4.14c-1.31 0-2.5.94-2.63 2.24A2.5 2.5 0 0 0 4 8h2v1H4.14c-1.31 0-2.5.94-2.63 2.24A2.5 2.5 0 0 0 4 14h2v8c0 .55.45 1 1 1s1-.45 1-1v-8h2a2.5 2.5 0 0 0 2.49-2.76C12.36 9.94 11.17 9 9.86 9z"
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
export class SiTapasIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

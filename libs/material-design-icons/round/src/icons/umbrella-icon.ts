import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-umbrella-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="m17.12 6.28-2.62.64L13 5.77V3.4c0-.26.22-.48.5-.48.23 0 .43.16.49.36.11.42.5.72.95.72.55 0 1-.45 1-1 0-.1-.02-.2-.05-.3-.3-.98-1.26-1.7-2.39-1.7C12.12 1 11 2.07 11 3.4v2.37L9.5 6.92l-2.62-.64a.505.505 0 0 0-.6.64l4.77 14.39c.15.46.55.69.95.69s.8-.23.95-.69l4.77-14.39a.505.505 0 0 0-.6-.64zM11 14.8 9.03 8.86l.92.23.76-.58.29-.22v6.51zm2 0V8.29l.28.22.76.58.92-.23L13 14.8z"
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
export class SiUmbrellaIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

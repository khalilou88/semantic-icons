import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-face-retouching-natural-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M10.66 4.12c2.55 4.23 7.03 3.87 7.18 3.86l-.57-1.25L12.4 4.5l.85-.39C12.84 4.04 12.43 4 12 4c-.46 0-.91.05-1.34.12zm-2.58.91a8.046 8.046 0 0 0-3.66 4.44 8.046 8.046 0 0 0 3.66-4.44z"
      opacity=".3"
    />
    <svg:path
      d="M19.89 10.75c.07.41.11.82.11 1.25 0 4.41-3.59 8-8 8s-8-3.59-8-8c0-.05.01-.1 0-.14 2.6-.98 4.69-2.99 5.74-5.55 3.38 4.14 7.97 3.73 8.99 3.61l-.89-1.93c-.13.01-4.62.38-7.18-3.86 1.01-.16 1.71-.15 2.59-.01l2.12-.97.64-.29A9.62 9.62 0 0 0 12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10c0-1.43-.3-2.78-.84-4.01l-1.27 2.76zM8.08 5.03a8.046 8.046 0 0 1-3.66 4.44 8.046 8.046 0 0 1 3.66-4.44z"
    />
    <svg:circle cx="9" cy="13" r="1.25" />
    <svg:circle cx="15" cy="13" r="1.25" />
    <svg:path
      d="M20.6 3.4 19.5 1l-1.1 2.4L16 4.5l2.4 1.1L19.5 8l1.1-2.4L23 4.5z"
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
export class SiFaceRetouchingNaturalIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

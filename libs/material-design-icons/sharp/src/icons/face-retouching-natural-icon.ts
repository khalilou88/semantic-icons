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
    <svg:circle cx="9" cy="13" r="1.25" />
    <svg:path
      d="M19.85 10.59C20.79 15.4 17.01 20 12 20c-4.41 0-8-3.59-8-8 0-.39 3.87-1.12 5.74-5.69 3.42 4.19 8.07 3.73 9.09 3.59l-1.48-3.25-4.72-2.15 3.5-1.59C9.51-.14 2 4.77 2 12c0 5.52 4.48 10 10 10 7.21 0 12.12-7.45 9.1-14.13l-1.25 2.72z"
    />
    <svg:circle cx="15" cy="13" r="1.25" />
    <svg:path
      d="M20.6 5.6 19.5 8l-1.1-2.4L16 4.5l2.4-1.1L19.5 1l1.1 2.4L23 4.5l-2.4 1.1z"
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

import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-face-retouching-off-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:circle cx="9" cy="13" r="1.25" />
    <svg:path
      d="M17.5 10c.75 0 1.47-.09 2.17-.24.21.71.33 1.46.33 2.24 0 1.22-.28 2.37-.77 3.4l1.49 1.49A9.981 9.981 0 0 0 22 12c0-5.52-4.48-10-10-10-1.78 0-3.44.47-4.89 1.28l5.33 5.33c1.49.88 3.21 1.39 5.06 1.39zM2.6 4.43l1.48 1.48a9.997 9.997 0 0 0-1.98 7.55c.62 4.33 4.11 7.82 8.44 8.44 2.85.41 5.51-.41 7.55-1.98l1.48 1.48a.996.996 0 1 0 1.41-1.41L4.01 3.01a.996.996 0 0 0-1.41 0c-.39.4-.39 1.03 0 1.42zm14.06 14.06A7.91 7.91 0 0 1 12 20c-4.41 0-8-3.59-8-8 0-.05.01-.1 0-.14a9.946 9.946 0 0 0 3.64-2.39l9.02 9.02z"
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
export class SiFaceRetouchingOffIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('24');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 24 24');
}

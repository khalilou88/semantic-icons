import {
  ChangeDetectionStrategy,
  Component,
  ViewEncapsulation,
  input,
} from '@angular/core';

@Component({
  selector: 'svg[si-text-paragraph-icon]',
  standalone: true,
  imports: [],
  template: `
    <svg:path
      d="M4.5 3.25C4.08579 3.25 3.75 3.58579 3.75 4C3.75 4.41422 4.08579 4.75 4.5 4.75L20.5 4.75C20.9142 4.75 21.25 4.41421 21.25 4C21.25 3.58579 20.9142 3.25 20.5 3.25H4.5Z"
      fill="#323544"
    />
    <svg:path
      d="M4.5 13.9166C4.08579 13.9166 3.75 14.2524 3.75 14.6666C3.75 15.0809 4.08579 15.4166 4.5 15.4166L20.5 15.4166C20.9142 15.4166 21.25 15.0809 21.25 14.6666C21.25 14.2524 20.9142 13.9166 20.5 13.9166L4.5 13.9166Z"
      fill="#323544"
    />
    <svg:path
      d="M3.75 20C3.75 19.5858 4.08579 19.25 4.5 19.25L12.5 19.25C12.9142 19.25 13.25 19.5858 13.25 20C13.25 20.4142 12.9142 20.75 12.5 20.75L4.5 20.75C4.08579 20.75 3.75 20.4142 3.75 20Z"
      fill="#323544"
    />
    <svg:path
      d="M4.5 8.58335C4.08579 8.58335 3.75 8.91914 3.75 9.33335C3.75 9.74757 4.08579 10.0834 4.5 10.0834L20.5 10.0834C20.9142 10.0834 21.25 9.74756 21.25 9.33335C21.25 8.91914 20.9142 8.58335 20.5 8.58335L4.5 8.58335Z"
      fill="#323544"
    />
  `,
  host: {
    '[attr.xmlns]': 'xmlns',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
    '[attr.viewBox]': 'viewBox()',
    '[attr.fill]': 'fill()',
  },
  styles: ``,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiTextParagraphIcon {
  protected readonly xmlns = 'http://www.w3.org/2000/svg';

  readonly width = input<string | number>('25');

  readonly height = input<string | number>('24');

  readonly viewBox = input<string>('0 0 25 24');

  readonly fill = input<string>('none');
}
